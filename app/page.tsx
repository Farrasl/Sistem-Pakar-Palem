"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PalmDetailCard } from "@/components/palmdetailcard";
import { CheckCircle, X, HelpCircle, Palmtree } from "lucide-react";
import { identificationMap, PalmIdentificationSystem, PalmDetail } from "@/data/palmdata";
import { ciriQuestions } from "@/data/ciriQuestions";

interface Result {
  nama: string;
  percentage: number;
  palmDetail: PalmDetail;
}

const PalmIdentification = () => {
  const [identificationSystem, setIdentificationSystem] = useState<PalmIdentificationSystem | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [results, setResults] = useState<Result[] | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [totalQuestions] = useState(Object.keys(ciriQuestions).length);

  useEffect(() => {
    const system = new PalmIdentificationSystem(identificationMap);
    setIdentificationSystem(system);
    const firstQuestion = system.getNextQuestion();
    setCurrentQuestion(firstQuestion);
  }, []);

  const handleAnswer = (answer: "yes" | "no" | "unsure") => {
    if (!identificationSystem || !currentQuestion) return;

    if (answer === "unsure") {
      alert("Pertanyaan ini dilewati karena Anda tidak yakin.");
    }    

    setAnsweredQuestions(prev => prev + 1);

    if (identificationSystem.isIdentificationComplete()) {
      const identifiedPalm = identificationSystem.getIdentifiedPalm();
      if (identifiedPalm && identifiedPalm in identificationMap) {
        const palmData = identificationMap[identifiedPalm as keyof typeof identificationMap];
        setResults([{
          nama: palmData.nama,
          percentage: 100,
          palmDetail: palmData.palmDetail
        }]);
      } else {
        const candidates = identificationSystem.getCurrentCandidates();
        const resultsList = candidates
          .filter(palmName => palmName in identificationMap)
          .map(palmName => {
            const palmData = identificationMap[palmName as keyof typeof identificationMap];
            return {
              nama: palmData.nama,
              percentage: identificationSystem.getMatchPercentage(palmName),
              palmDetail: palmData.palmDetail
            };
          })
          .sort((a, b) => b.percentage - a.percentage);

        setResults(resultsList);
      }
      setIsFinished(true);
      return;
    }

    const nextQuestion = identificationSystem.getNextQuestion();
    setCurrentQuestion(nextQuestion);

    if (!nextQuestion) {
      setIsFinished(true);
    }
  };

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
          {!isFinished && currentQuestion ? (
            <div className="space-y-6">
              <div className="text-lg font-medium text-center">
                {ciriQuestions[currentQuestion]}
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
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  Tidak Yakin
                </Button>
              </div>
            </div>
          ) : results && results.length > 0 ? (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">
                {results[0].percentage === 100 ? "Hasil Identifikasi:" : "Kemungkinan Jenis Palem:"}
              </h3>
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
    </div>
  );
};

export default PalmIdentification;