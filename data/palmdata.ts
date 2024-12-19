export interface PalmCiri {
  [key: string]: number;
}

export interface PalmDetail {
  nama: string;
  deskripsi: string;
  asal: string;
  habitat: {
    suhu: string;
    kelembaban: string;
    cahaya: string;
    ketinggian: string;
  };
  perawatan: {
    penyiraman: string;
    pemupukan: string;
    pemangkasan: string;
  };
  ciriKhas: string[];
  manfaat: string[];
  srcimage: string;
}

export interface PalmData {
  ciri: PalmCiri;
  nama: string;
  palmDetail: PalmDetail;
}

export interface IdentificationMap {
  [key: string]: PalmData;
}

export interface Result {
  nama: string;
  percentage: number;
  palmDetail: PalmDetail;
}

export interface Answers {
  [key: string]: boolean;
}

export const identificationMap = {
  P1: {
    ciri: {
      B1: 1,
      B2: 1,
      B3: 1,
      B4: 0.9,
      B5: 0.8,
      B6: 0.7,
    },
    nama: "Palem Raja (Roystonea regia)",
    palmDetail: {
      nama: "Palem Raja (Roystonea regia)",
      deskripsi:
        "Palem Raja adalah salah satu jenis palem yang paling megah dan sering digunakan sebagai tanaman hias di taman-taman besar. Memiliki sosok yang tinggi menjulang dengan batang yang kokoh dan mahkota daun yang indah.",
      asal: "Karibia (Kuba dan Honduras)",
      habitat: {
        suhu: "24-29°C",
        kelembaban: "60-80%",
        cahaya: "Sinar matahari penuh hingga setengah teduh",
        ketinggian: "0-1000m dpl",
      },
      perawatan: {
        penyiraman:
          "Siram secara teratur, jaga agar tanah tetap lembab tapi tidak tergenang",
        pemupukan: "Pupuk NPK setiap 3-4 bulan sekali",
        pemangkasan: "Pangkas daun tua dan pelepah yang mengering",
      },
      ciriKhas: [
        "Batang tunggal yang tinggi dan lurus",
        "Tinggi mencapai 20-30 meter",
        "Batang licin berwarna abu-abu terang",
        "Mahkota daun berbentuk mahkota yang megah",
        "Pelepah daun mengelupas dengan sempurna",
        "Bunga tersusun dalam tandan besar",
      ],
      manfaat: [
        "Tanaman hias landscape",
        "Peneduh area taman",
        "Memperbaiki kualitas udara",
        "Nilai estetika tinggi untuk area publik",
      ],
      srcimage: "/images/PalemRaja.png",
    },
  },
  P2: {
    ciri: {
      B1: 1,
      B2: 1,
      B7: 1,
      B8: 0.9,
      B9: 0.8,
      B10: 0.7,
    },
    nama: "Palem Kelapa (Cocos nucifera)",
    palmDetail: {
      nama: "Palem Kelapa (Cocos nucifera)",
      deskripsi:
        "Palem Kelapa adalah jenis palem yang sangat populer dan memiliki nilai ekonomi tinggi. Dikenal dengan buahnya yang menghasilkan air kelapa dan daging kelapa yang dapat diolah menjadi berbagai produk.",
      asal: "Asia Tenggara dan Kepulauan Pasifik",
      habitat: {
        suhu: "20-35°C",
        kelembaban: "70-80%",
        cahaya: "Sinar matahari penuh",
        ketinggian: "0-1000m dpl",
      },
      perawatan: {
        penyiraman: "Tahan kekeringan, siram saat musim kemarau",
        pemupukan: "Pupuk organik dan NPK setiap 6 bulan",
        pemangkasan: "Pangkas daun tua dan pelepah kering",
      },
      ciriKhas: [
        "Batang tunggal melengkung",
        "Tinggi mencapai 30 meter",
        "Buah besar berserabut",
        "Daun menyirip panjang",
        "Akar serabut yang kuat",
        "Bekas pelepah yang jelas pada batang",
      ],
      manfaat: [
        "Buah dapat dikonsumsi",
        "Bahan baku industri",
        "Tanaman produktif",
        "Penahan erosi pantai",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },
  P3: {
    ciri: {
      B11: 1,
      B12: 1,
      B13: 1,
      B14: 0.9,
      B15: 0.8,
      B16: 0.7,
    },
    nama: "Palem Merah (Cyrtostachys renda)",
    palmDetail: {
      nama: "Palem Merah (Cyrtostachys renda)",
      deskripsi:
        "Palem Merah adalah jenis palem yang sangat menarik karena warna batang dan pelepahnya yang merah cerah. Sering digunakan sebagai tanaman hias karena keunikan dan keindahannya.",
      asal: "Malaysia dan Indonesia",
      habitat: {
        suhu: "22-32°C",
        kelembaban: "70-90%",
        cahaya: "Teduh hingga setengah teduh",
        ketinggian: "0-800m dpl",
      },
      perawatan: {
        penyiraman: "Jaga kelembaban tanah tetap tinggi",
        pemupukan: "Pupuk NPK seimbang setiap 2-3 bulan",
        pemangkasan: "Pangkas daun dan pelepah yang menguning",
      },
      ciriKhas: [
        "Batang dan pelepah berwarna merah cerah",
        "Tumbuh berumpun",
        "Tinggi 5-10 meter",
        "Daun menyirip berwarna hijau",
        "Buah kecil kehitaman",
        "Tumbuh lambat",
      ],
      manfaat: [
        "Tanaman hias eksklusif",
        "Focal point taman",
        "Penambah nilai estetika",
        "Pembatas area taman",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },
  P4: {
    ciri: {
      B1: 1,
      B17: 1,
      B18: 1,
      B19: 0.9,
      B20: 0.8,
      B21: 0.7,
    },
    nama: "Palem Kipas (Livistona chinensis)",
    palmDetail: {
      nama: "Palem Kipas (Livistona chinensis)",
      deskripsi:
        "Palem Kipas dikenal dengan daunnya yang berbentuk kipas yang indah. Sangat populer sebagai tanaman hias di taman dan lansekap karena bentuknya yang unik dan perawatan yang relatif mudah.",
      asal: "China Selatan dan Jepang",
      habitat: {
        suhu: "18-35°C",
        kelembaban: "60-80%",
        cahaya: "Sinar matahari penuh hingga teduh",
        ketinggian: "0-1200m dpl",
      },
      perawatan: {
        penyiraman: "Siram secara teratur, toleran terhadap kekeringan",
        pemupukan: "Pupuk NPK setiap 3 bulan",
        pemangkasan: "Pangkas daun tua dan pelepah kering",
      },
      ciriKhas: [
        "Daun berbentuk kipas",
        "Tangkai daun berduri",
        "Tinggi 10-15 meter",
        "Daun berwarna hijau kebiruan",
        "Batang tunggal tegak",
        "Buah bulat kehitaman",
      ],
      manfaat: [
        "Tanaman hias taman",
        "Peneduh area",
        "Pembatas kawasan",
        "Nilai estetika tinggi",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },
  P5: {
    ciri: {
      B1: 1,
      B22: 1,
      B23: 1,
      B24: 0.9,
      B25: 0.8,
      B26: 0.7,
    },
    nama: "Palem Ekor Tupai (Wodyetia bifurcata)",
    palmDetail: {
      nama: "Palem Ekor Tupai (Wodyetia bifurcata)",
      deskripsi:
        "Palem Ekor Tupai memiliki nama yang unik karena bentuk daunnya yang menyerupai ekor tupai. Sangat populer sebagai tanaman hias karena keindahan bentuk daunnya.",
      asal: "Australia",
      habitat: {
        suhu: "20-32°C",
        kelembaban: "60-80%",
        cahaya: "Sinar matahari penuh",
        ketinggian: "0-500m dpl",
      },
      perawatan: {
        penyiraman: "Siram secara teratur saat musim kering",
        pemupukan: "Pupuk NPK setiap 4 bulan",
        pemangkasan: "Pangkas daun tua dan pelepah kering",
      },
      ciriKhas: [
        "Daun menyerupai ekor tupai",
        "Tinggi 8-15 meter",
        "Batang tunggal ramping",
        "Daun berwarna hijau terang",
        "Buah merah saat matang",
        "Pelepah daun panjang",
      ],
      manfaat: [
        "Tanaman hias eksotis",
        "Penghias jalan",
        "Focal point taman",
        "Estetika landscape",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },
  P6: {
    ciri: {
      B27: 1,
      B28: 1,
      B29: 1,
      B30: 0.9,
      B31: 0.8,
      B32: 0.7,
    },
    nama: "Palem Putri (Veitchia merillii)",
    palmDetail: {
      nama: "Palem Putri (Veitchia merillii)",
      deskripsi:
        "Palem Putri adalah jenis palem yang compact dan elegan, sangat cocok untuk taman kecil dan halaman rumah. Terkenal dengan buahnya yang berwarna merah cerah.",
      asal: "Filipina",
      habitat: {
        suhu: "22-32°C",
        kelembaban: "60-80%",
        cahaya: "Sinar matahari penuh hingga teduh",
        ketinggian: "0-800m dpl",
      },
      perawatan: {
        penyiraman: "Siram secara teratur, jangan sampai kering",
        pemupukan: "Pupuk NPK setiap 3 bulan",
        pemangkasan: "Pangkas daun tua dan bunga kering",
      },
      ciriKhas: [
        "Batang tunggal ramping",
        "Tinggi 5-10 meter",
        "Buah merah terang",
        "Daun menyirip rapi",
        "Pelepah hijau mengkilap",
        "Tandan buah yang indah",
      ],
      manfaat: [
        "Tanaman hias taman kecil",
        "Penghias halaman",
        "Pembatas area",
        "Estetika landscape mini",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },
  P7: {
    ciri: {
      B11: 1,
      B33: 1,
      B34: 1,
      B35: 0.9,
      B36: 0.8,
      B37: 0.7,
    },
    nama: "Palem Kuning (Chrysalidocarpus lutescens)",
    palmDetail: {
      nama: "Palem Kuning (Chrysalidocarpus lutescens)",
      deskripsi:
        "Palem Kuning adalah jenis palem yang tumbuh berumpun dengan batang berwarna kuning kehijauan. Sangat populer sebagai tanaman hias indoor dan outdoor.",
      asal: "Madagaskar",
      habitat: {
        suhu: "20-30°C",
        kelembaban: "60-80%",
        cahaya: "Cahaya tidak langsung hingga teduh",
        ketinggian: "0-700m dpl",
      },
      perawatan: {
        penyiraman: "Jaga kelembaban tanah tetap stabil",
        pemupukan: "Pupuk NPK setiap 2-3 bulan",
        pemangkasan: "Pangkas daun kuning dan pelepah kering",
      },
      ciriKhas: [
        "Batang kuning kehijauan",
        "Tumbuh berumpun",
        "Tinggi 6-12 meter",
        "Daun menyirip rapat",
        "Pelepah kuning kehijauan",
        "Buah kecil hitam",
      ],
      manfaat: [
        "Tanaman hias indoor",
        "Penghias taman",
        "Pembatas alami",
        "Penyejuk ruangan",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },
  P8: {
    ciri: {
      B1: 1,
      B38: 1,
      B39: 1,
      B40: 0.9,
      B41: 0.8,
      B42: 0.7,
    },
    nama: "Palem Botol (Hyophorbe lagenicaulis)",
    palmDetail: {
      nama: "Palem Botol (Hyophorbe lagenicaulis)",
      deskripsi:
        "Palem Botol memiliki bentuk batang yang unik seperti botol atau tabung yang membesar di bagian tengah. Sangat menarik sebagai focal point dalam taman.",
      asal: "Mauritius",
      habitat: {
        suhu: "20-32°C",
        kelembaban: "60-80%",
        cahaya: "Sinar matahari penuh",
        ketinggian: "0-500m dpl",
      },
      perawatan: {
        penyiraman: "Siram secara teratur, toleran kekeringan",
        pemupukan: "Pupuk NPK setiap 4 bulan",
        pemangkasan: "Pangkas daun tua dan pelepah kering",
      },
      ciriKhas: [
        "Batang membengkak di tengah",
        "Tinggi 3-6 meter",
        "Batang abu-abu",
        "Daun menyirip",
        "Buah ungu gelap",
        "Tumbuh lambat",
      ],
      manfaat: [
        "Focal point taman",
        "Tanaman hias unik",
        "Nilai estetika tinggi",
        "Penghias area kecil",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },
  P9: {
    ciri: {
      B11: 1,
      B43: 1,
      B44: 1,
      B45: 0.9,
      B46: 0.8,
      B47: 0.7,
    },
    nama: "Palem Jepang (Ptychosperma macarthurii)",
    palmDetail: {
      nama: "Palem Jepang (Ptychosperma macarthurii)",
      deskripsi:
        "Palem Jepang memiliki bentuk yang ramping dan elegan. Tumbuh secara berumpun dan sering digunakan sebagai tanaman hias indoor atau outdoor.",
      asal: "Australia Utara dan Papua",
      habitat: {
        suhu: "20-35°C",
        kelembaban: "70-90%",
        cahaya: "Cahaya tidak langsung hingga setengah teduh",
        ketinggian: "0-600m dpl",
      },
      perawatan: {
        penyiraman: "Siram secara teratur, jangan biarkan tanah kering",
        pemupukan: "Berikan pupuk NPK setiap 3 bulan",
        pemangkasan: "Pangkas daun yang kering atau rusak",
      },
      ciriKhas: [
        "Batang ramping dan halus",
        "Tumbuh berumpun",
        "Tinggi 3-10 meter",
        "Daun hijau panjang menyirip",
        "Buah kecil berwarna merah",
        "Toleran terhadap naungan",
      ],
      manfaat: [
        "Tanaman hias indoor dan outdoor",
        "Estetika ruangan dan taman",
        "Tanaman pembatas yang alami",
        "Penghijauan area rumah",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },

  P10: {
    ciri: {
      B11: 1,
      B48: 1,
      B49: 1,
      B50: 0.9,
      B51: 0.8,
      B52: 0.7,
    },
    nama: "Palem Waregu (Rhapis excelsa)",
    palmDetail: {
      nama: "Palem Waregu (Rhapis excelsa)",
      deskripsi:
        "Palem Waregu dikenal sebagai salah satu jenis palem yang mudah dirawat. Memiliki bentuk daun seperti kipas kecil yang memberikan kesan tropis.",
      asal: "Asia Timur (China dan Jepang)",
      habitat: {
        suhu: "15-30°C",
        kelembaban: "60-90%",
        cahaya: "Cahaya tidak langsung hingga teduh",
        ketinggian: "0-1000m dpl",
      },
      perawatan: {
        penyiraman:
          "Jaga tanah tetap lembab, siram saat lapisan atas mengering",
        pemupukan: "Pupuk organik setiap 4-5 bulan",
        pemangkasan: "Pangkas daun tua atau rusak",
      },
      ciriKhas: [
        "Tumbuh berumpun",
        "Tinggi 1-4 meter",
        "Daun berbentuk kipas kecil",
        "Batang berwarna hijau kecokelatan",
        "Tahan naungan",
        "Cocok untuk ruangan indoor",
      ],
      manfaat: [
        "Tanaman hias indoor",
        "Penyejuk ruangan",
        "Tanaman pengisi sudut ruangan",
        "Penghijauan ruangan kecil",
      ],
      srcimage: "/api/placeholder/400/300",
    },
  },
};
