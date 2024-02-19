export type Student = {
    dec?: string | number | undefined;
    moy: number | string;
    exam?: number | string;
    test?: number | string;
    name?: string;
    num?: string | number;
    mat?: string;
    coef: number | string;
    dep?: string;
};

export const calculateGeneralAverage = (student : Student[] ) => {
    let totalWeightedMarks = 0;
    let totalCoefficient = 0;

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