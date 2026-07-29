import fs from 'fs';



export interface SaveFileUseCase{
    execute: (options: Options ) => boolean;
}

export interface Options{
    fileContent: string;
    filedestination?: string;
    fileName? : string;

}


export class SaveFile implements SaveFileUseCase{
    constructor(

        /** repository: StorageRepository */

    ){}

    execute ({fileContent, filedestination = 'outputs', fileName = 'table'}: Options) : boolean {


        try{

             fs.mkdirSync(filedestination, { recursive: true });
             fs.writeFileSync(`${filedestination}/${fileName}.txt`, fileContent ); 
             //console.log('File created!');
             return true;
        } catch (error){
             console.error(error);
             return false;
        }

    }
}

