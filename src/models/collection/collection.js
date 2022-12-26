class collection{
    constructor(model){
        this.model=model;
    }
    ////////////creat=insert///////////////////////////
    
    async create(obj) {
        try {
            const newRecord = await this.model.create(obj);
            return newRecord;
        } catch (e) {
            console.log(e);
            console.error("error in creating a new record in model ", this.model)
    
        }
    }
    /////////////read//////////////////////////
    async read ( id ) {
        try {
            if ( id ) {
                return await this.model.findOne( { where: { id: id } } );
            } else {
                return await this.model.findAll();
            }
        } catch ( e ) {
            console.error( `Error in reading data with the id: ${id}` );
        }
    }

    //////////////update///////////////////////
    async update(id,obj)
    {
    try{
        const updated = await this.model.update(obj);
    return updated;
    }
    catch(error){
        console.error("error while updating  record in ",this.model)
    
    }
    }
    ///////////////delete/////////////////
    async delete(id)
    {
        try{
            const deleted=null;
           deleted = await this.model.destroy({ where: { id: id} });
    return deleted;
        }
        catch(error){
            console.error("error while deleting  record in ",this.model)
    
        }
    }
    }
    
    module.exports=collection;