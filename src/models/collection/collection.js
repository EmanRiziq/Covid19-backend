class collection{
    constructor(model){
        this.model=model;
    }
    
    async create(obj) {
        try {
            const newRecord = await this.model.create(obj);
            return newRecord;
        } catch (e) {
            console.error("error in creating a new record in model ", this.model)
    
        }
    }
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
    async delete ( id ) {
        try {
            return await this.model.destroy( { where: id } );
        } catch ( e ) {
            console.error( `Error while deleting the data with id: ${id}` );
        }
    }
    }
    
    module.exports=collection;