import { signInService } from "./auth/signInService";
import { signInServiceWithOnlyEmail } from "./auth/signInServiceWithOnlyEmail";
import { recommService } from "./recomm/recommService";
import { createNodeService } from "./recomm/createNodeService";
import { createRelationsService } from "./recomm/createRelationsService";
import { getPublicationsService } from "./publications/getPublicationsService";
import { createOwnershipService } from "./ownership/createOwnershipService";

export const auth = { signInService, signInServiceWithOnlyEmail };

export const recomm = { recommService, createNodeService, createRelationsService };

export const publications = { getPublicationsService };

export const ownership = { createOwnershipService };
