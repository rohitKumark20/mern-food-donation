function proactiveness(self_life,distance) {
    function openLeft(x, alpha, beta) {
        if (x < alpha) {
            return 1;
        } else if (x >= alpha && x <= beta) {
            return (beta - x) / (beta - alpha)
        } else {
            return 0;
        }
    }
    
    function openRight(x, alpha, beta) {
        if (x > beta) {
            return 1;
        } else if (x <= beta && x >= alpha) {
            return (x - alpha) / (beta - alpha);
        } else {
            return 0;
        }
    }
    
    function triangular(x, a, b, c) {
        return Math.max(Math.min((x - a) / (b - a), (c - x) / (c - b)), 0);
    }
    
    //Fuzzy partition for distance
    function distancePartition(x) {
        let close = 0, nearby = 0, moderate = 0, far = 0, veryFar = 0;
    
        if (x >= 0 && x < 6) {
            close = openLeft(x, 0, 6)
        } else if (x >= 3 && x < 9) {
            nearby = triangular(x, 3, 6, 9)
        } else if (x >= 6 && x < 12) {
            moderate = triangular(x, 6, 9, 12)
        } else if (x >= 9 && x < 15) {
            far = triangular(x, 9, 12, 15)
        } else {
            veryFar = openRight(x, 12, 15)
        }
    
        return [close, nearby, moderate, far, veryFar]
    }
    
    //Fuzzy partition for self life
    function selfLife(x) {
        let NL = 0, NS = 0, NM = 0, ZE = 0, PS = 0, PM = 0, PL = 0;
    
        if (x >= 0 && x < 60) {
            PL = openLeft(x, 0, 60)
        } else if (x >= 30 && x < 90) {
            PM = triangular(x, 30, 60, 90)
        } else if (x >= 60 && x < 120) {
            PS = triangular(x, 60, 90, 120)
        } else if (x >= 90 && x < 150) {
            ZE = triangular(x, 90, 120, 150)
        } else if (x >= 120 && x < 180) {
            NS = triangular(x, 120, 150, 180)
        } else if (x >= 150 && x < 210) {
            NM = triangular(x, 150, 180, 210)
        } else {
            NL = openRight(x, 180, 210);
        }
    
        return [NL, NM, NS, ZE, PS, PM, PL]
    }
    
    const [NL, NM, NS, ZE, PS, PM, PL] = selfLife(self_life);
    const [close, nearby, moderate, far, veryFar] = distancePartition(distance)
    
    const outPut = [
        [NL, NM, NS, ZE, PS, PM, PL],
        [close, nearby, moderate, far, veryFar]
    ];
    
    // console.log("The fuzzy values of the crisp inputs");
    // console.log(["NL", "NM", "NS", "ZE", "PS", "PM", "PL"]);
    // console.log(outPut.map(row => row.map(value => Math.round(value * 100) / 100)));
    
    function compare(a, b) {
        let state = 0;
        if (a > b && a !== 0 && b !== 0) {
            state = b;
        } else {
            state = a;
        }
    
        if (a === 0 && b !== 0) {
            state = b;
        }
    
        if (b === 0 && a !== 0) {
            state = a;
        }
    
        return state;
    }
    
    function rule(NL, NM, NS, ZE, PS, PM, PL, close, nearby, moderate, far, veryFar) {
        const veryLow = Math.min(NL, veryFar)
        const veryLow1 = Math.min(NL, far);
        const finalvlow = compare(veryLow, veryLow1)
    
        const veryHigh = Math.min(NL, close)
        const veryHigh1 = Math.min(PL, veryFar)
        const finalvhigh = compare(veryHigh, veryHigh1)
    
        const high = Math.min(NL, moderate);
        const high1 = Math.min(PL, far);
        const finalhigh = compare(high, high1)
    
        const moderates = Math.min(ZE, moderate);
        const moderates1 = Math.min(PM, moderate);
        const finalmoderate = compare(moderates, moderates1)
    
        const low = Math.min(PL, close);
        const low1 = Math.min(PL, nearby)
        const finallow = compare(low, low1)
    
        return [finalvlow, finalvhigh, finalhigh, finalmoderate, finallow]
    }
    
    const [finalvlow, finalvhigh, finalhigh, finalmoderate, finallow] = rule(NL, NM, NS, ZE, PS, PM, PL, close, nearby, moderate, far, veryFar)
    
    const outPutRules = [[finalvlow, finalvhigh, finalhigh, finalmoderate, finallow]];
    // console.log("The fuzzy output: ");
    // console.log(["finalvlow", "finalvhigh", "finalhigh", "finalmoderate", "finallow"]);
    // console.log(outPutRules.map(arr => arr.map(val => Math.round(val * 100) / 100))); 
    
    
    if(outPutRules[0][0]!=0){
        return ("veryLow");
    }
    else if(outPutRules[0][1]!=0){
        return ("veryhigh");
    }
    else if(outPutRules[0][2]!=0){
        return ("high");
    }
    else if(outPutRules[0][3]!=0){
        return ("moderate");
    }
    else if(outPutRules[0][4]!=0){
        return ("low");
    }else{
        return ('No Rule exist');
    }
    
    
    //Defuzzification
    function areaTR(mu, a, b, c) {
        let x1 = mu * (b - a) + c;
        let x2 = c - mu * (c - b);
        let d1 = (c - a);
        let d2 = x2 - x1;
    
        a = (1 / 2) * mu * (d1 + d2)
        return a
    }
    
    function areaOL(mu, alpha, beta) {
        let xol = beta - mu * (beta - alpha)
        return [(1 / 2) * mu * (beta + xol), beta / 2]
    }
    
    function areaOR(mu, alpha, beta) {
        let xor = mu * (beta - alpha) + alpha
        let aor = (1 / 2) * mu * ((12 - alpha) + (12 - xor))
        return [aor, (12 - alpha) / 2 + alpha]
    }
    
    //
    function defuzzyfication(veryLow,veryHigh,high,moderate,Low) {
        let areavl = 0;
        let areal = 0;
        let aream = 0;
        let areah = 0;
        let areavh = 0;
        let cvl = 0;
        let cl = 0;
        let cm = 0;
        let ch = 0;
        let cvh = 0;
    
        if (veryHigh !== 0) {
            [areavh, cvh] = areaOR(veryHigh, 8, 12);
        }
    
        if (high !== 0) {
            areah = areaTR(high, 6, 8, 10);
            ch = 8;
        }
    
        if (moderate !== 0) {
            aream = areaTR(aream, 4, 6, 8);
            cm = 6;
        }
    
        if (Low !== 0) {
            areal = areaTR(areal, 2, 4, 6);
            cl = 4;
        }
    
        if (veryLow !== 0) {
            [areavl, cvl] = areaOL(veryLow, 2, 4);
        }
    
        let numerator = areavl * cvl + areal * cl + aream * cm + areah * ch + areavh * cvh;
        let denominator = areavl + areal + aream + areah + areavh;
    
        // if (denominator === 0) {
        //     console.log("No rules exist to give the result");
        //     return 0;
        // } else {
        //     let crispOutput = numerator / denominator;
        //     return crispOutput;
        // }
    }
    
    // Example usage
    
    let crispOutputFinal = defuzzyfication(finalvlow, finalvhigh, finalhigh, finalmoderate, finallow);
    
    // if (crispOutputFinal !== 0) {
    //     console.log("The crisp proactiveness value is: ", crispOutputFinal);
    // }
    
}


console.log(proactiveness(25,15))