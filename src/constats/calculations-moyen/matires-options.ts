
interface placeholder {
    placeholder : string,
    id : 'FirsteMatiere' | 'SecondMatiere' | 'ThirdeMatiere' | 'MoyenGenerale',
    label : string
}


export const placeHolders : { [key: string]: placeholder[] } = {
        'العلوم الطبيعية': [
            {
                placeholder: "أدخل نتيجة العلوم ",
                id: "FirsteMatiere",
                label: "نتيجة العلوم",
            },
            {
                placeholder: "أدخل نتيجة الفيزياء ",
                id: "SecondMatiere",
                label: "نتيجة الفيزياء",
            },
            {
                placeholder: "أدخل نتيجة الرياضيات ",
                id: "ThirdeMatiere",
                label: "نتيجة الرياضيات",
            },
            {
                placeholder: "أدخل المعدل العام ",
                id: "MoyenGenerale",
                label: "المعدل العام",
            },
        ],
        "الرياضيات": [
            {
                placeholder: "أدخل نتيجة الرياضيات ",
                id: "FirsteMatiere",
                label: "نتيجة الرياضيات",
            },
            {
                placeholder: "أدخل نتيجة الفيزياء ",
                id: "SecondMatiere",
                label: "نتيجة الفيزياء",
            },
            {
                placeholder: "أدخل نتيجة العلوم ",
                id: "ThirdeMatiere",
                label: "نتيجة العلوم",
            },
            {
                placeholder: "أدخل المعدل العام",
                id: "MoyenGenerale",
                label: "المعدل العام",
            },
        ],
        "الآداب الأصلية": [
            {
                placeholder: "نتيجة التشريع",
                id: "FirsteMatiere",
                label: "نتيجة التشريع",
            },
            {
                placeholder: "نتيجة اللغة العربية",
                id: "SecondMatiere",
                label: "نتيجة اللغة العربية",
            },
            {
                placeholder: "نتيجة الفكر الإسلامي",
                id: "ThirdeMatiere",
                label: "نتيجة الفكر الإسلامي",
            },
            {
                placeholder: "نتيجة المعدل العام",
                id: "MoyenGenerale",
                label: "نتيجة المعدل العام",
            },
        ],
        "الآداب العصرية": [
            {
                placeholder: "نتيجة اللغة العربية",
                id: "FirsteMatiere",
                label: "نتيجة اللغة العربية",
            },
            {
                placeholder: "نتيجة الفلسفة",
                id: "SecondMatiere",
                label: "نتيجة الفلسفة",
            },
            {
                placeholder: "نتيجة اللغة الفرنسية",
                id: "ThirdeMatiere",
                label: "نتيجة اللغة الفرنسية",
            },
            {
                placeholder: "نتيجة المعدل العام",
                id: "MoyenGenerale",
                label: "نتيجة المعدل العام",
            },
        ],
    };
