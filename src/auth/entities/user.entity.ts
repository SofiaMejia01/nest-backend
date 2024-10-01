import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


/*Schema crea un esquema  */
@Schema()
export class User {
    //mongoose lo genera por defecto;
     _id?:string;
   

    @Prop({unique:true, required:true})
    email:string;

    @Prop({required:true})
    name:string;

    @Prop({minlength:6, required:true})
    password?:string;

    @Prop({default:true})
    isActive:boolean;

    @Prop({type: [String], default: ['user']})
    roles:string[];

}

export const UserSchema = SchemaFactory.createForClass(User);
