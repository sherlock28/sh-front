import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Center,
  Select,
  RadioGroup,
  Stack,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
} from "@chakra-ui/react";
import { RangeSlider } from "./RangeSlider";
// import { useDispatch } from "react-redux";
// import { fetchPublicationsByFilters } from "reducers/publicationSlice";
import { CustomButton } from "components/commons/CustomButton";

export function SearchForm() {
//   const dispatch = useDispatch();

  const [typeHouse, setTypeHouse] = useState("Departamento");
  const [isFurnished, setIsFurnished] = useState(true);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [size, setSize] = useState(40);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "typeHouse") setTypeHouse(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filters = {
      typeHouse,
      isFurnished,
      bedrooms,
      bathrooms,
      size,
      min,
      max,
    };
    console.log(filters);
    // dispatch(fetchPublicationsByFilters(filters));
  };

  return (
    <form>
      <FormControl>
        <FormLabel>Tipo de inmueble</FormLabel>
        <Select
          onChange={handleChange}
          name="typeHouse"
          placeholder="Selecciona el tipo de inmueble"
          _focus={{ background: "none" }}
        >
          <option>Casa</option>
          <option>Departamento</option>
        </Select>
      </FormControl>

      <Flex w="100%" justifyContent="center" flexDir="column">
        <FormControl mt={8}>
          <FormLabel>Amoblado</FormLabel>
          <RadioGroup defaultValue="1">
            <Stack spacing={4} direction="row">
              <Radio value="1" onChange={() => setIsFurnished(true)}>
                Si
              </Radio>
              <Radio value="2" onChange={() => setIsFurnished(false)}>
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <Stack
          shouldWrapChildren
          direction={["column", "column", "row", "row"]}
        >
          <FormControl mt={8}>
            <FormLabel>Cantidad de habitaciones</FormLabel>
            <NumberInput
              onChange={(value) => setBedrooms(value)}
              size="md"
              maxW={24}
              defaultValue={2}
              min={1}
              max={15}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl mt={8} ml={[0, 0, 4, 4]}>
            <FormLabel>Cantidad de baños</FormLabel>
            <NumberInput
              onChange={(value) => setBathrooms(value)}
              size="md"
              maxW={24}
              defaultValue={1}
              min={1}
              max={10}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Stack>

        <FormControl mt={8}>
          <FormLabel>Tamaño (m²)</FormLabel>
          <NumberInput
            onChange={(value) => setSize(value)}
            size="md"
            maxW={24}
            defaultValue={40}
            min={0}
            max={100}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Flex>

      <FormControl mt={8}>
        <RangeSlider setMin={setMin} setMax={setMax} />
      </FormControl>

      <Center mt={8}>
        <CustomButton
          handleClick={handleSearch}
          type="submit"
          // isLoading={isFetching}
          loadingText="Buscando"
          width="75%"
          textButton="Buscar"
        />
      </Center>
    </form>
  );
}