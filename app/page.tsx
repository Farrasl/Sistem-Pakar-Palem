"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PalmDetailCard } from "@/components/palmdetailcard";
import { CheckCircle, X, HelpCircle } from "lucide-react";
import { identificationMap } from "@/data/palmdata";
import { ciriQuestions } from "@/data/ciriQuestions";

 interface PalmCiri {
  [key: string]: number;
}

 interface PalmDetail {
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
  imageUrl: string;
}

 interface PalmData {
  ciri: PalmCiri;
  nama: string;
  palmDetail: PalmDetail;
}

 interface IdentificationMap {
  [key: string]: PalmData;
}

 interface Result {
  nama: string;
  percentage: number;
  palmDetail: PalmDetail;
}

 interface Answers {
  [key: string]: boolean;
}

const PalmIdentification = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<Result[] | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [exactMatch, setExactMatch] = useState<PalmData | null>(null);

  const questionKeys = Object.keys(ciriQuestions);

  const checkExactMatch = (answers: Answers): PalmData | null => {
    for (const [palmKey, palm] of Object.entries(identificationMap)) {
      const palmCiriKeys = Object.keys(palm.ciri);
      const allCiriMatched = palmCiriKeys.every(ciriKey => answers[ciriKey] === true);
      
      if (allCiriMatched) {
        return palm;
      }
    }
    return null;
  };

  const calculateResults = (): Result[] => {
    const scores: { [key: string]: Result } = {};

    Object.entries(identificationMap).forEach(([palmKey, palm]) => {
      let score = 0;
      let totalWeight = 0;

      Object.entries(palm.ciri).forEach(([ciriKey, weight]) => {
        if (answers[ciriKey] === true) {
          score += weight;
        }
        totalWeight += weight;
      });

      scores[palmKey] = {
        nama: palm.nama,
        percentage: (score / totalWeight) * 100,
        palmDetail: palm.palmDetail
      };
    });

    return Object.values(scores)
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);
  };

  const handleAnswer = (answer: "yes" | "no" | "unsure") => {
    const currentKey = questionKeys[currentQuestionIndex];
    const newAnswers = {
      ...answers,
      [currentKey]: answer === "yes",
    };
    setAnswers(newAnswers);

    const match = checkExactMatch(newAnswers);
    if (match) {
      setExactMatch(match);
      setIsFinished(true);
      return;
    }

    if (currentQuestionIndex >= questionKeys.length - 1) {
      const calculatedResults = calculateResults();
      setResults(calculatedResults);
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const progress = (currentQuestionIndex / questionKeys.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sistem Identifikasi Palem
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isFinished ? (
          <div className="space-y-6">
            <div className="text-lg font-medium text-center">
              {ciriQuestions[questionKeys[currentQuestionIndex]]}
            </div>

            <div className="flex justify-center gap-4">
              <Button
                onClick={() => handleAnswer("yes")}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Ya
              </Button>
              <Button
                onClick={() => handleAnswer("no")}
                variant="destructive"
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Tidak
              </Button>
              <Button
                onClick={() => handleAnswer("unsure")}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                Tidak Yakin
              </Button>
            </div>
          </div>
        ) : exactMatch ? (
          <div className="space-y-6">
            <PalmDetailCard detail={exactMatch.palmDetail} />
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Kemungkinan Jenis Palem:</h3>
            {results &&
              results.map((result, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between">
                    <span>{result.nama}</span>
                    <span>{result.percentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={result.percentage} />
                  {result.percentage > 80 && (
                    <PalmDetailCard detail={result.palmDetail} />
                  )}
                </div>
              ))}
          </div>
        )}

        {!isFinished && (
          <div className="mt-8 space-y-2">
            <Progress value={progress} />
            <div className="text-center text-sm text-gray-500">
              Progress: {Math.round(progress)}%
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PalmIdentification;
