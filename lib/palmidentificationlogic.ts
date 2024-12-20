
const getNextQuestion = (currentKey: string, answer: boolean): string | null => {
    const questionMap: { [key: string]: { yes: string | null; no: string | null } } = {
      // First level split
      B1: { yes: "B2", no: "B11" },
      
      // B1 -> Ya path
      B2: { yes: "B3", no: "B17" },
      B3: { yes: "B4", no: "B7" },
      B4: { yes: "B5", no: "B8" },
      B5: { yes: "B6", no: "B9" },
      B6: { yes: null, no: "B10" }, // Yes leads to Palem Raja
      B7: { yes: "B18", no: null },
      B8: { yes: "B19", no: null },
      B9: { yes: "B20", no: null },
      B10: { yes: null, no: null }, // Leads to Palem Kelapa
      
      // B17 branch (from B2 No)
      B17: { yes: "B22", no: "B38" },
      B18: { yes: "B23", no: null },
      B19: { yes: "B20", no: null },
      B20: { yes: "B21", no: null },
      B21: { yes: null, no: null }, // Leads to Palem Kipas
      B22: { yes: null, no: null },
      B23: { yes: "B24", no: null },
      B24: { yes: "B25", no: null },
      B25: { yes: "B26", no: null },
      B26: { yes: null, no: null }, // Leads to Palem Ekor Tupai
      
      // B1 -> Tidak -> B11 path
      B11: { yes: "B12", no: "B28" },
      B12: { yes: "B13", no: "B33" },
      B13: { yes: "B14", no: "B34" },
      B14: { yes: "B15", no: "B35" },
      B15: { yes: "B16", no: "B36" },
      B16: { yes: null, no: "B37" }, // Yes leads to Palem Merah
      
      // B28 branch (from B11 No)
      B28: { yes: "B29", no: null },
      B29: { yes: "B30", no: null },
      B30: { yes: "B31", no: null },
      B31: { yes: "B32", no: null },
      B32: { yes: null, no: null }, // Leads to Palem Putri
      
      // B33 branch (from B12 No)
      B33: { yes: "B34", no: "B43" },
      B34: { yes: "B35", no: "B44" },
      B35: { yes: "B36", no: "B45" },
      B36: { yes: "B37", no: "B46" },
      B37: { yes: null, no: "B47" }, // Yes leads to Palem Kuning
      
      // B38 branch (from B17 No)
      B38: { yes: "B39", no: null },
      B39: { yes: "B40", no: null },
      B40: { yes: "B41", no: null },
      B41: { yes: "B42", no: null },
      B42: { yes: null, no: null }, // Leads to Palem Botol
      
      // B43 branch (from B33 No)
      B43: { yes: "B44", no: "B48" },
      B44: { yes: "B45", no: "B49" },
      B45: { yes: "B46", no: "B50" },
      B46: { yes: "B47", no: "B51" },
      B47: { yes: null, no: "B52" }, // Yes leads to Palem Jepang
      
      // B48 branch (from B43 No)
      B48: { yes: "B49", no: null },
      B49: { yes: "B50", no: null },
      B50: { yes: "B51", no: null },
      B51: { yes: "B52", no: null },
      B52: { yes: null, no: null }, // Leads to Palem Waregu
    };
  
    return questionMap[currentKey]?.[answer ? "yes" : "no"] ?? null;
  };
  
  const determinePalmType = (answers: { [key: string]: boolean }): string | null => {
    // Palem Raja
    if (answers["B1"] && answers["B2"] && answers["B3"] && answers["B4"] && 
        answers["B5"] && answers["B6"]) {
      return "P1";
    }
    
    // Palem Kelapa
    if (answers["B1"] && answers["B2"] && answers["B3"] && answers["B4"] && 
        answers["B5"] && !answers["B6"] && answers["B10"]) {
      return "P2";
    }
    
    // Palem Kipas
    if (answers["B1"] && answers["B2"] && !answers["B3"] && answers["B8"] && 
        answers["B19"] && answers["B20"] && answers["B21"]) {
      return "P4";
    }
    
    // Palem Ekor Tupai
    if (answers["B1"] && answers["B2"] && answers["B3"] && !answers["B4"] && 
        answers["B7"] && answers["B18"] && answers["B23"] && answers["B24"] && 
        answers["B25"] && answers["B26"]) {
      return "P5";
    }
    
    // Palem Merah
    if (!answers["B1"] && answers["B11"] && answers["B12"] && answers["B13"] && 
        answers["B14"] && answers["B15"] && answers["B16"]) {
      return "P3";
    }
    
    // Palem Putri
    if (!answers["B1"] && answers["B11"] && !answers["B12"] && answers["B28"] && 
        answers["B29"] && answers["B30"] && answers["B31"] && answers["B32"]) {
      return "P6";
    }
    
    // Palem Kuning
    if (!answers["B1"] && answers["B11"] && answers["B12"] && !answers["B13"] && 
        answers["B34"] && answers["B35"] && answers["B36"] && answers["B37"]) {
      return "P7";
    }
    
    // Palem Botol
    if (answers["B1"] && !answers["B2"] && answers["B17"] && !answers["B22"] && 
        answers["B38"] && answers["B39"] && answers["B40"] && answers["B41"] && 
        answers["B42"]) {
      return "P8";
    }
    
    // Palem Jepang
    if (!answers["B1"] && answers["B11"] && answers["B12"] && !answers["B13"] && 
        !answers["B34"] && answers["B43"] && answers["B44"] && answers["B45"] && 
        answers["B46"] && answers["B47"]) {
      return "P9";
    }
    
    // Palem Waregu
    if (!answers["B1"] && answers["B11"] && answers["B12"] && !answers["B13"] && 
        !answers["B34"] && !answers["B43"] && answers["B48"] && answers["B49"] && 
        answers["B50"] && answers["B51"] && answers["B52"]) {
      return "P10";
    }
  
    return null;
  };
  
  export { getNextQuestion, determinePalmType };

  