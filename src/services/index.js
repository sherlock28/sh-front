import { signInService } from "./auth/signInService";
import { recommService } from "./recomm/recommService";
import { createNodeService } from "./recomm/createNodeService";
import { createRelationsService } from "./recomm/createRelationsService";
import { getPublicationsService } from "./publications/getPublicationsService";

export const auth = { signInService };

export const recomm = { recommService, createNodeService, createRelationsService };

export const publications = { getPublicationsService };
