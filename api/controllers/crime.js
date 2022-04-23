const  Crime = require("../models/Crime");

module.exports.addcrime = (req,res) => {
    const {reported_by, crime_type, location, description, status} = req.body;
    let newCrime = new Crime({reported_by, crime_type, location, description, status});
    newCrime.save((err,success) => {
        if(err)
        {
            console.log("Error in adding crime: ", err);
          return res.status(400).json({ error: err });
        }
        else
        {
            res.status(201).json({ crime: newCrime });
        }
    })
}

module.exports.updatestatus = (req,res) => {
    const {_id,  status} = req.body;
    Crime.updateOne({_id:_id},  
        {
            $set: 
            {
                status: status
            },
        }, (err,result) => {
            if(err) 
            {
                console.log(err);
                res.status(400).send({error: 'errrr'});
            }
            else
            {
                res.status(201).json({result: 'status updated'});
            }

        })
}

module.exports.listcrimes = async (req,res) => {
    const allcrimes = await Crime.find({});
    if(allcrimes)
    {
        res.status(201).json({allcrimes: allcrimes});
    }
    else
    {
        res.status(404).json({error: "error"});
    }
}

module.exports.crimesid = async (req,res) => {
    const id = req.body.id;
    const allcrimes = await Crime.find({reported_by: id});
    if(allcrimes)
    {
        res.status(201).json({allcrimes: allcrimes});
    }
    else
    {
        res.status(404).json({error: error});
    }
}
