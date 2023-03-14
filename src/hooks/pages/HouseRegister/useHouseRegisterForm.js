import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   registerHouseAction,
//   housesSelector,
//   clearState,
// } from "reducers/houseSlice";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_API_KEY_GEOCODER);
Geocode.setLanguage("es");
Geocode.setLocationType("ROOFTOP");

export function useHouseRegisterForm() {
  //   const dispatch = useDispatch();
  // eslint-disable-next-line
  //   const { isFetching, isSuccess, isError } = useSelector(housesSelector);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [initialCenter, setInitialCenter] = useState({
    lat: -26.83033687159553,
    lng: -65.20379811655849,
  });
  const [coordinates, setCoordinates] = useState(null);
  const [address, setAddress] = useState("");
  const [zoom, setZoom] = useState(13);

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
          console.log({ lat, lng })
        },
        (err) => {
          console.error(err);
        }
      );
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);
  const [errorsImage, setErrorsImage] = useState({ message: "" });
  const [errorsCaptcha, setErrorsCaptcha] = useState({ message: "" });
  const [validCaptcha, setValidCaptcha] = useState(false);

  /**************************************************************************************/

  const onSubmit = (data) => {
    if (images.length === 0) {
      setErrorsImage({
        ...errorsImage,
        message: "Debes seleccionar al menos una foto.",
      });
      return;
    }
    // if (!validCaptcha) {
    //   setErrorsCaptcha({
    //     ...errorsCaptcha,
    //     message: "Completa el captcha.",
    //   });
    //   return;
    // }
    data.coordanates = coordinates;
    data.address = address;

    console.log(data)
    console.log({ images })
    // dispatch(registerHouseAction({ data, images }));
  };


  function onChange(value) {
    value ? setValidCaptcha(true) : setValidCaptcha(false);
  }

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
    errorsCaptcha,
    onFileChange,
    onSubmit,
    onChange,
    removeImage,
    isOpen,
    onClose,
  };
}
