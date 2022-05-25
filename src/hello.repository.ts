import { EntityRepository, Repository } from "typeorm";
import { Hello } from "./hello.entity";

@EntityRepository(Hello)
export class HelloRepository extends Repository<Hello> {

}