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
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip
} from "@chakra-ui/react";
import { CustomButton } from "components/commons/CustomButton";
import { useSearchForm } from "hooks/pages/Search/useSearchForm";
import { ANY_OWNERSHIPS_TYPE } from "const";

export function SearchForm() {

  const { onSubmitSearchPublications } = useSearchForm();

  const [ownershipsType, setOwnershipsType] = useState(ANY_OWNERSHIPS_TYPE);
  const [isFurnished, setIsFurnished] = useState(false);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [size, setSize] = useState(40);

  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showStartTooltip, setShowStartTooltip] = useState(false);
  const [showEndTooltip, setShowEndTooltip] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "ownershipsType") setOwnershipsType(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filters = {
      ownershipsType,
      isFurnished,
      bedrooms,
      bathrooms,
      size,
      priceRange
    };
    onSubmitSearchPublications(filters);
  };

  return (
    <form>
      <FormControl>
        <FormLabel>Tipo de inmueble</FormLabel>
        <Select
          onChange={handleChange}
          name="ownershipsType"
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
          <RadioGroup defaultValue="2">
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

      <FormControl m={2}>
        <FormLabel>Precio</FormLabel>
        <RangeSlider
          aria-label={['min', 'max']}
          colorScheme='blackAlpha'
          min={0}
          max={100000}
          defaultValue={[30000, 80000]}
          onChangeEnd={(range) => setPriceRange(range)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>

          <Tooltip
            hasArrow
            bg='black'
            color='white'
            placement='top'
            isOpen={showStartTooltip}
            label={priceRange[0]}
          >
            <RangeSliderThumb
              index={0}
              onMouseEnter={() => setShowStartTooltip(true)}
              onMouseLeave={() => setShowStartTooltip(false)} />
          </Tooltip>

          <Tooltip
            hasArrow
            bg='black'
            color='white'
            placement='top'
            isOpen={showEndTooltip}
            label={priceRange[1]}
          >
            <RangeSliderThumb
              index={1}
              onMouseEnter={() => setShowEndTooltip(true)}
              onMouseLeave={() => setShowEndTooltip(false)} />
          </Tooltip>
        </RangeSlider>
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
