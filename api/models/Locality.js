const mongoose= require('mongoose');

const localitySchema = new mongoose.Schema(
    {
      locality_name: {
        type: String,
        unique: true,
        required: true
      },
      population_density: {
        type: Number,
        required: true
      },
      avg_age: {
        type: Number,
        required: true
      },
      avg_income: {
        type: Number,
        required: true
      },
      police_station_count: {
          type: Number,
          required: true
      },
      patroling: {
          type: Number,
          required: true
      },
      morality_level: {
          type: Number,
          required: true
      }
    },
    { timestamps: true }
  );

  const localities = mongoose.model("localities", localitySchema);

  const createDocument = async() => {
      try {
          const l1= new localities({
              locality_name: 'Teliarganj',
              population_density: 8960,
              avg_age: 25,
              avg_income: 10000,
              police_station_count: 1,
              patroling: 5,
              morality_level: 6
          })
          const l2= new localities({
            locality_name: 'Civil Lines',
            population_density: 24738,
            avg_age: 30,
            avg_income: 15015,
            police_station_count: 2,
            patroling: 3,
            morality_level: 7
        })
          const l3= new localities({
            locality_name: 'Sangam',
            population_density: 9582,
            avg_age: 27,
            avg_income: 7000,
            police_station_count: 2,
            patroling: 2,
            morality_level: 3
        })
        const l4= new localities({
            locality_name: 'Bank Road',
            population_density: 9548,
            avg_age: 25,
            avg_income: 9004,
            police_station_count: 3,
            patroling: 2,
            morality_level: 4
        })
        const l5= new localities({
            locality_name: 'Katra',
            population_density: 16157,
            avg_age: 35,
            avg_income: 11021,
            police_station_count: 4,
            patroling: 3,
            morality_level: 6
        })
        const l6= new localities({
            locality_name: 'Prayagraj Junction',
            population_density: 16458,
            avg_age: 34,
            avg_income: 19865,
            police_station_count: 2,
            patroling: 2,
            morality_level: 6
        })
        const l7= new localities({
            locality_name: 'Prayag Junction',
            population_density: 2546,
            avg_age: 29,
            avg_income: 6200,
            police_station_count: 0,
            patroling: 0,
            morality_level: 6
        })
        const l8= new localities({
            locality_name: 'Govindpur',
            population_density: 12452,
            avg_age: 25,
            avg_income: 25000,
            police_station_count: 3,
            patroling: 3,
            morality_level: 7
        })
        const l9= new localities({
            locality_name: 'Rambagh',
            population_density: 19254,
            avg_age: 36,
            avg_income: 16040,
            police_station_count: 1,
            patroling: 1,
            morality_level: 7
        })
        const l10= new localities({
            locality_name: 'Chowk',
            population_density: 10005,
            avg_age: 35,
            avg_income: 30000,
            police_station_count: 3,
            patroling: 4,
            morality_level: 8
        })
        const l11= new localities({
            locality_name: 'Jhunsi',
            population_density: 9784,
            avg_age: 26,
            avg_income: 12010,
            police_station_count: 1,
            patroling: 0,
            morality_level: 4
        })
        const l12= new localities({
            locality_name: 'Jhalwa',
            population_density: 16548,
            avg_age: 29,
            avg_income: 13511,
            police_station_count: 2,
            patroling: 1,
            morality_level: 4
        })
        const l13= new localities({
            locality_name: 'Allahpur',
            population_density: 11454,
            avg_age: 31,
            avg_income: 18945,
            police_station_count: 4,
            patroling: 5,
            morality_level: 5
        })
        const l14= new localities({
            locality_name: 'Tagore Town',
            population_density: 8245,
            avg_age: 25,
            avg_income: 5041,
            police_station_count: 1,
            patroling: 0,
            morality_level: 2
        })
        const l15= new localities({
            locality_name: 'Daraganj',
            population_density: 7814,
            avg_age: 29,
            avg_income: 7845,
            police_station_count: 0,
            patroling: 0,
            morality_level: 3
        })
        const l16= new localities({
            locality_name: 'Chungi',
            population_density: 6014,
            avg_age: 38,
            avg_income: 15011,
            police_station_count: 0,
            patroling: 0,
            morality_level: 4
        })
        const l17= new localities({
            locality_name: 'Cantonment',
            population_density: 13547,
            avg_age: 27,
            avg_income: 32154,
            police_station_count: 2,
            patroling: 2,
            morality_level: 9
        })
        const l18= new localities({
            locality_name: 'Khusrobagh',
            population_density: 6845,
            avg_age: 30,
            avg_income: 4512,
            police_station_count: 1,
            patroling: 1,
            morality_level: 1
        })

        const l19= new localities({
            locality_name: 'Mumfordganj',
            population_density: 17946,
            avg_age: 32,
            avg_income: 20120,
            police_station_count: 3,
            patroling: 3,
            morality_level: 6
        })

        const l20= new localities({
            locality_name: 'Police Line',
            population_density: 16714,
            avg_age: 35,
            avg_income: 35042,
            police_station_count: 5,
            patroling: 4,
            morality_level: 10
        })

        const result = await localities.insertMany([l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20]);
      }
      catch(error)
      {
          console.log(error);
      }
    }

    //createDocument();
// User.on('index', function(err) {
//     if (err) console.log(err);
//   });
module.exports = localities;