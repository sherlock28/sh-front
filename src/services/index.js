import { signInService } from "./auth/signInService";
import { recommService } from "./recomm/recommService";
import { getPublicationsUsingFiltersService } from "./publications/getPublicationsUsingFiltersService";

export const auth = { signInService };

export const recomm = { recommService };

export const publications = { getPublicationsUsingFiltersService };
