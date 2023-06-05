//arrays

let skills: string[] = ['Bash', 'Laravel', 'API-REST'];

//objects

interface Character {
    name: string;
    surname: string;
    age: number;
    skills: string[]
    puebloNatal?: string;
}

const character: Character = {
    name: 'Sheldon',
    surname: 'Cooper',
    age: 35,
    skills: ['coding', 'sarcasm', 'board games master']
}

character.puebloNatal = 'Pueblo Paleta';