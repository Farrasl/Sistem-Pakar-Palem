"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PalmDetailCard } from "@/components/palmdetailcard";
import { CheckCircle, X, HelpCircle, Palmtree } from "lucide-react";
import { identificationMap, PalmData, Result } from "@/data/palmdata";
import { ciriQuestions } from "@/data/ciriQuestions";
import { getNextQuestion } from "@/lib/palmidentificationlogic";

interface Answers {
  [key: string]: boolean;
}

const PalmIdentification = () => {
  const [currentQuestionKey, setCurrentQuestionKey] = useState("B1"); // Start with B1
  const [answers, setAnswers] = useState<Answers>({});
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState<Result[] | null>(null);
  const [exactMatch, setExactMatch] = useState<PalmData | null>(null);

  const checkExactMatch = (answers: Answers): PalmData | null => {
    for (const [, palm] of Object.entries(identificationMap)) {
      const palmCiriKeys = Object.keys(palm.ciri);
      const allCiriMatched = palmCiriKeys.every(
        (ciriKey) => answers[ciriKey] === true
      );

      if (allCiriMatched) {
        return palm;
      }
    }
    return null;
  };

  const calculateResults = (currentAnswers: Answers): Result[] => {
    const scores: { [key: string]: Result } = {};
  
    Object.entries(identificationMap).forEach(([palmKey, palm]) => {
      let matchedCiriCount = 0;
      const totalCiriCount = Object.keys(palm.ciri).length;
  
      Object.entries(palm.ciri).forEach(([ciriKey]) => {
        if (currentAnswers[ciriKey]) {
          matchedCiriCount++;
        }
      });
  
      const percentage = (matchedCiriCount / totalCiriCount) * 100;
  
      if (percentage > 0) {
        scores[palmKey] = {
          nama: palm.nama,
          percentage: percentage,
          palmDetail: palm.palmDetail,
        };
      }
    });
  
    return Object.values(scores).sort((a, b) => b.percentage - a.percentage);
  };
  
  

  const handleAnswer = (answer: "yes" | "no" | "unsure") => {
    const newAnswers = { ...answers };
    if (answer !== "unsure") {
      newAnswers[currentQuestionKey] = answer === "yes";
    }

    setAnswers(newAnswers);

    const match = checkExactMatch(newAnswers);
    if (match) {
      setExactMatch(match);
      setIsFinished(true);
      return;
    }

    const nextKey = getNextQuestion(currentQuestionKey, answer === "yes");
    if (nextKey) {
      setCurrentQuestionKey(nextKey);
    } else {
      const calculatedResults = calculateResults(newAnswers);
      setResults(calculatedResults.length > 0 ? calculatedResults : null);
      setIsFinished(true);
    }
  };

  const totalQuestions = Object.keys(ciriQuestions).length;
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="flex items-center justify-center bg-green-50 min-h-screen">
      <Card className="w-full max-w-2xl mx-auto bg-[#FBF6E9]">
        <CardHeader>
          <Palmtree size={48} className="mr-4 text-green-700" />
          <CardTitle className="text-2xl font-bold text-center">
            Sistem Identifikasi Palem
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!isFinished ? (
            <div className="space-y-6">
              <div className="text-lg font-medium text-center">
                {ciriQuestions[currentQuestionKey]}
              </div>
              <div className="flex justify-center gap-4">
                <Button onClick={() => handleAnswer("yes")} className="flex items-center gap-2">
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
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  Tidak Yakin
                </Button>
              </div>
              <div className="mt-8 space-y-2">
                <Progress value={progress} />
                <div className="text-center text-sm text-gray-500">
                  Progress: {Math.round(progress)}%
                </div>
              </div>
            </div>
          ) : exactMatch ? (
            <div className="space-y-6">
              <PalmDetailCard detail={exactMatch.palmDetail} />
            </div>
          ) : results ? (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Kemungkinan Jenis Palem:</h3>
              {results.map((result, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between">
                    <span>{result.nama}</span>
                    <span>{result.percentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={result.percentage} />
                  <PalmDetailCard detail={result.palmDetail} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-red-500 text-lg font-semibold">
              Tidak ada Ciri-Ciri yang Cocok
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PalmIdentification;
