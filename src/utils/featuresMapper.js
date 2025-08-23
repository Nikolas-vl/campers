import {
  Wind,
  FuelPump,
  CupHot,
  Shower,
  Tv,
  Radio,
  Fridge,
  Microwave,
  GasStove,
  IonWater,
  Diagram,
} from '../assets/icons/iconsComp';

export const mapFeatures = camper => {
  const features = [];

  if (camper.transmission) {
    features.push({ label: camper.transmission, icon: Diagram });
  }
  if (camper.engine) {
    features.push({ label: camper.engine, icon: FuelPump });
  }
  if (camper.AC) {
    features.push({ label: 'AC', icon: Wind });
  }
  if (camper.bathroom) {
    features.push({ label: 'Bathroom', icon: Shower });
  }
  if (camper.kitchen) {
    features.push({ label: 'Kitchen', icon: CupHot });
  }
  if (camper.TV) {
    features.push({ label: 'TV', icon: Tv });
  }
  if (camper.radio) {
    features.push({ label: 'Radio', icon: Radio });
  }
  if (camper.refrigerator) {
    features.push({ label: 'Fridge', icon: Fridge });
  }
  if (camper.microwave) {
    features.push({ label: 'Microwave', icon: Microwave });
  }
  if (camper.gas) {
    features.push({ label: 'Gas', icon: GasStove });
  }
  if (camper.water) {
    features.push({ label: 'Water', icon: IonWater });
  }

  return features;
};
