import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { useSelector } from "react-redux";
import { REGISTER_OWNERSHIPS } from "client/gql/mutations/registerOwnerships/registerOwnerships";
import { getVarOwnerships } from "client/gql/mutations/registerOwnerships/getVarOwnerships";
import Geocode from "react-geocode";
import { useGetOwnerId } from "hooks/utils/useGetOwnerId";
import { postImagesService } from "services/ownership/postImagesService";
import { authSelector } from "store/slices/authSlice";

Geocode.setApiKey(process.env.REACT_APP_API_KEY_GEOCODER);
Geocode.setLanguage("es");
Geocode.setLocationType("ROOFTOP");

export function useHouseRegisterForm() {

  const [initialCenter, setInitialCenter] = useState({
    lat: -26.83033687159553,
    lng: -65.20379811655849,
  });
  const [coordinates, setCoordinates] = useState(null);
  const [address, setAddress] = useState("");
  const [zoom, setZoom] = useState(13);

  const [images, setImages] = useState([]);
  const [errorsImage, setErrorsImage] = useState({ message: "" });

  const [loading, setLoading] = useState(false);

  const [_, setLocation] = useLocation();

  const { user } = useSelector(authSelector);

  /**************************************************************************************/

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**************************************************************************************/

  const getCoordinates = () => {
    setCoordinates({ lat: -26.83002230629563, lng: -65.20258569223947 });
    setInitialCenter({ lat: -26.83002230629563, lng: -65.20258569223947 });
    setZoom(16);
    if (address != "") {
      Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setCoordinates({ lat, lng });
          setZoom(16);
          setInitialCenter({ lat, lng });
        },
        (err) => {
          console.error(err);
        }
      );
    }
  };

  /**************************************************************************************/

  const { owner_id } = useGetOwnerId();

  const [registerOwnership, { error }] = useMutation(REGISTER_OWNERSHIPS);

  const onSubmit = (data) => {

    if (images.length === 0) {
      setErrorsImage({
        ...errorsImage,
        message: "Debes seleccionar al menos una foto.",
      });
      return;
    }

    setLoading(true);

    data.coordinates = coordinates;
    data.address = address;

    let variables = getVarOwnerships(data);

    variables.owners_id = owner_id;

    registerOwnership({ variables }).then(async ({ data }) => {
      let idHouse = data?.insert_sh_ownerships?.returning?.at(0).id;

      if (idHouse === undefined || idHouse === null) return;

      const formData = new FormData();

      for (let index = 0; index < images.length; index++) {
        formData.append("images", images[index]);
      }

      formData.append("idHouse", idHouse);

      const response = await postImagesService({ formData });

      if (response?.success === true) {
        setLocation(`/cuenta/${user.id}`);
      }

      setLoading(false);
    });
  };

  /**************************************************************************************/

  /* Images */

  const onFileChange = (e) => {
    const img = e.target.files[0];
    setImages([...images, img]);
    setErrorsImage({
      ...errorsImage,
      message: "",
    });
  };

  const removeImage = (index) => {
    let newImages = [];
    if (index !== -1) {
      images.forEach((image, i) => {
        if (i !== index) newImages.push(image);
      });
      setImages(newImages);
    }
  };

  /**************************************************************************************/

  return {
    setAddress,
    initialCenter,
    coordinates,
    zoom,
    getCoordinates,
    register,
    handleSubmit,
    errors,
    images,
    errorsImage,
    onFileChange,
    onSubmit,
    loading,
    error,
    removeImage,
  };
}
