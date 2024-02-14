import {optionType} from '@/types/options-type'
  
  export interface Archive {
    faculiter: string;
    filieres: optionType[];
    img: string;
  }



export const archives: Archive[] = [
    {
      faculiter: "fst",
      filieres: [
        { content: "BG", url: "17IdOq6c-90NuSqUJh3enxARpqAaSAbfh" },
        { content: "PC", url: "17LQAoxbF3cGJgmTLP_uAcnLZAXeCdjz-" },
        { content: "MPI", url: "17QchjyP0r9NMklrkZp1HRoaVrgpRiwuo" },
      ],
      img : '/fac/01.png',
    },
    {
      faculiter: "fslh",
      filieres: [
          { content: "علم الاجتماع ", url: "1s5frk5wGBkgA4AVpA8AsBqZcl7Dosiuw" },
          { content: "اللغات الوطنية ", url: "1v8PKYRZZNxwlvYOx43zJuKFbk048bTnT" },
          { content: "الفلسفة ", url: "1N5liQSlrakNo2sFoRpgT3ZoOz7XSGRoC" },
          { content: "الفرنسية", url: "1jvdE_aoOlk5-71-SuSGMoC7vV6xjCINZ" },
          { content: "العمل الاجتماعي", url: "1aFEV2cT7m0fdOnYVubUPlT8FhTjRkvde" },
          { content: "العربية", url: "1-myZZer45eA9aaJCIkJ14TQWcLUJx8nb" },
          { content: "الصينية", url: "19WexUcB3vKqbZkBEE4nbpucxZEMfHR64" },
          { content: "الجغرافيا", url: "1CMDBm-lwqe7dVlTmcdpsQ-BfWm24Wy1i" },
          { content: "التنمية المحلية ", url: "1YKXWz1ppHH1OWVpcTBnvZuJDUWmOeNc-" },
          { content: "التاريخ ", url: "17hM1C2Je7USvFe_EHZivsPhgYlgqm7ae" },
          { content: "البيئة والتنمية المستدامة", url: "1hSfEdLl7oJ2bAZxLYgQrCH4AlB9WHwus" },
          { content: "الإنگليزية", url: "1Rt9cDnLDRalSFAWlGNO5LUtNykxRISpc" },
          { content: "الإسبانية", url: "1zIr-uzGNSIrUYs4ZbXUWtBvbaQbX1pR7" },
        ],
      img : '/fac/02.png',
    },
    {
      faculiter: "fsje",
      filieres: [
          { content: "Droit", url: "1Lb7YDMylIugnKeWTyyfZnz_58fhiF1L3" },
          { content: "Economie", url: "1OO6y47-bmxcyTJQjDecm9pFFNPF2l7o9" },
          { content : 'GRH' , url : "15fYV9qKNnLY52Sa9lS_2kSX-kJ5XLSoQ"},
          { content : 'FC' , url : "1hupwo_zxW5PmctDPhaaTcvJ6_GSTAvlK"} ,
          { content : "BA" , url : "1u1t73iSXtoBdRHWsKi4U8zo9xfsoT7s8"} ,
        ],
      img : '/fac/11.jpg',
    },
    {
      faculiter : 'iscae',
      filieres : [
          { content: "GRH", url: "1o02xWde7CMPV2ghUczAecha-Flq79pQo" },
          { content: "IG", url: "1GIcbp2gXSgw2mQN5WzWzz6gZ8GFM-c5F" },
          { content: "TCM", url: "1Oa2RwhnL9ngdCQFgs2UPp9Xaww7mv_x5" },
          { content: "SAE", url: "1_boN__SeP5325VJRKhzU9HzFxKgYYJ1y" },
          { content: "RIT", url: "1WC9xF4crqhVdOlqXfTVa13FbIYQh_PtZ" },
          { content: "FC", url: "1ieNZP8e4z_H9Lx6oLF3d9TN9jnrW5T1j" },
          { content: "DI", url: "1L8FeIA7iwdNlX_tI4RcBEVf8B77sQwkI" },
          { content: "BA", url: "1ad5V0wcrGeCqKz4ZJwsa_yRiHIu5CHED" },
      ],
      img : '/fac/03.png',
    },{
      faculiter : 'iseri',
      filieres : [
          { content: "مسلك اللغة العربية", url: "1S7z_isXoTWgTczw9r9C4Up1d6qL_qot2" },
          { content: "مسلك الدراسات الإسلامية", url: "1E8qe26WXZ3cDy4k6govjPlFZYMZW-qvL" },
      ],
      img : '/fac/04.png',
    },{
      faculiter : 'roso',
      filieres : [
          { content: "L1", url: "166Kb6SqWlHyv5G8Tuzn5vehF9czb0wz6" },
          { content: "L2", url: "167AEFLuYSQfSbheIM1-RXviL1GGPP2G4" },
          { content: "L3", url: "1697fBGl5Yr2GQTiRC5rVMI_n2I5cQO_D" },
      ],
      img : '/fac/08.png',
    }, {
      faculiter : 'supnum',
      filieres : [
          { content: "جذع مشترك", url: "1-0H0PBvbaE1tpnCYLssu9UZiqu-_6AiC" },
      ],
      img : '/fac/14.jpg',
    },{
      faculiter : 'fm',
      filieres : [
          { content: "الطب", url: "1bt05LrZKMs2kSLtXLMHF6QZJuPPgg59z" },
          { content: "الصيدلة", url: "1yhh66iQHUu-IrG1L-84ywxW-xd6FVmYG" },
      ],
      img : '/fac/06.png',
    },{
      faculiter : 'enss',
      filieres : [
          { content: "جذع مشترك", url: "1vxiS8FmKRZfDgoH-x6lTikAL35ffr5-l" },
      ],
      img : '/fac/10.png',
    },{
      faculiter : 'anglais',
      filieres : [
          { content: "الإتصال الدولي", url: "1V6VwhPVpDFM194eOIv5Kod4hQldD725-" },
      ], 
      img : '/fac/15.jpg',
    },{
      faculiter : 'translate',
      filieres : [
          { content: "AR FR", url: "1zgRGwJ4V9IAwRz23SjL43gUTpul9ReY5" },
          { content: "ANG FR", url: "1HK4mKbRgM7U3tI4uAjrINm35Z5hTQ7gr" },
          { content: "ANG AR", url: "17g8qJ2hP3D8UbQ6152V1C4Z1O-aTS0RN" },
      ],
      img : '/fac/09.png',
    },{
      faculiter : 'iup',
      filieres : [
          { content: "Reseaux", url: "1-R13GptNs1G4zMwLyFPZ23GZ1JrL3tax" },
          { content: "Management", url: "1-N13qeIyiobU_GXHOpTopHlk1JB_Y3dj" },
          { content: "MAEF", url: "1-SGXuTPAkyZiaeCAADBhfLSWKhrE5eJu" },
          { content: "LGTR", url: "10HgrslRRUYlN61hyuz6EhwyEyUyrKzHA" },
      ],
      img : '/fac/05.jpg',
    },{
      faculiter : 'usi',
      filieres : [
          { content: "كلية للغة العربية", url: "1ujyhGNKOpYKs3oUvANjYFIFMrCRU_Mx6" },
          { content: "كلية الشريعة", url: "1BTlz5hJbV3muT6vmzbdbO-cPHpBykBID" },
          { content: "كلية أصول الدين", url: "1LXvtvHoAqt5MW6QUx2-fTP_suW8UD7hR" },
      ],
      img :  '/fac/08.png',
    }
  ];
  