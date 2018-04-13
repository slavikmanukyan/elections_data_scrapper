function Person(sequelize, DataTypes) {
    return sequelize.define('person',
      {
        firstName: { type: DataTypes.STRING, field: 'first_name' },
        lastName: { type: DataTypes.STRING, field: 'last_name' },
        fatherName: { type: DataTypes.STRING, field: 'father_name' },
        birthDate: { type: DataTypes.DATE, field: 'birth_date' },
        region: { type: DataTypes.STRING },
        city: { type: DataTypes.STRING },
        address: { type: DataTypes.STRING },
        electionPlace: { type: DataTypes.INTEGER, field: 'election_place' }
      },
      {
        tableName: 'persons',
      });
  }
  
  export default Person;