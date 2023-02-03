import { signInService } from "./auth/signInService";
import { recommService } from "./recomm/recommService";
import { getPublicationsService } from "./publications/getPublicationsService";

export const auth = { signInService };

export const recomm = { recommService };

export const publications = { getPublicationsService };
