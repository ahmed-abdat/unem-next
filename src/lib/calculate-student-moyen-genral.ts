
export type Student = {
    dec: string ;
    moy: number ;
    exam: number ;
    test: number ;
    name: string;
    num: string | number;
    mat: string;
    coef: number ;
    dep: string;
};

export type StudentInfo = {
    "Profil d'orientation": string;
    Name: string;
    Profil: string;
}

export const calculateGeneralAverage = (student : Student[] ) => {
    let totalWeightedMarks  = 0;
    let totalCoefficient  = 0;

    // Iterate through each subject for the student
    student.forEach(subject => {
            totalWeightedMarks += +subject.coef * +subject.moy;
            totalCoefficient += +subject.coef;
    });
    
    // Calculate the general average
    const generalAverage = totalWeightedMarks / totalCoefficient;
    
    console.log(parseFloat(generalAverage.toFixed(2)));
    return parseFloat(generalAverage.toFixed(2));
}