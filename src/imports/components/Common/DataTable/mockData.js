
import faker from 'faker';

export const generateMockData = () => {
    let data = [];
    for(let i=0; i< 100; i++) {
        data.push({
            id: i,
            engine: faker.name.findName(),
            borwser: faker.company.companyName(),
            os: 'Win 95+'
        })
    }
   
    return data
}