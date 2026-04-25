export interface IAuth{
    id: number
    login: string,
    parol: string,
    ban: boolean
}

export const AUTHDATA: IAuth[] = [
    {
        id: 1,
        ban: false,
        login : 'admin',
        parol: '777admin'
    },
        {
        id: 2,
        ban: false,
        login : 'Irina',
        parol: '757456irina'
    },
      {
        id: 3,
        ban: false,
        login : 'Naima',
        parol: '99978naima'
    },
      {
        id: 4,
        ban: false,
        login : 'Darixa',
        parol: '12453darixa'
    },
     {
        id: 5,
        ban: false,
        login : 'Ksenya',
        parol: '563154ksenya'
    },
    {
        id: 6,
        ban: false,
        login : 'Albina',
        parol: '11124albina'
    },
    {
        id: 7,
        ban: false,
        login : 'Rimma',
        parol: '7458rimma'
    },
]