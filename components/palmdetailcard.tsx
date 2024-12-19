import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Info, MapPin, TreePine, Droplets, Sun } from "lucide-react";

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
  srcimage: string;
}

interface PalmDetailCardProps {
  detail: PalmDetail;
}

export const PalmDetailCard: React.FC<PalmDetailCardProps> = ({ detail }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{detail.nama}</CardTitle>
            <CardDescription className="mt-2">
              <Badge variant="outline" className="mr-2">
                <MapPin className="w-3 h-3 mr-1" />
                {detail.asal}
              </Badge>
            </CardDescription>
          </div>
          <div className="relative w-32 h-32">
            <Image
              src={detail.srcimage}
              alt={detail.nama}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Deskripsi */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Info className="w-5 h-5" />
            Deskripsi
          </h3>
          <p className="mt-2 text-gray-600">{detail.deskripsi}</p>
        </div>

        <Separator />

        {/* Habitat dan Kondisi Tumbuh */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <TreePine className="w-5 h-5" />
            Habitat dan Kondisi Tumbuh
          </h3>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Kebutuhan Cahaya:</span>
              </div>
              <p className="text-gray-600 text-sm">{detail.habitat.cahaya}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Kelembaban:</span>
              </div>
              <p className="text-gray-600 text-sm">{detail.habitat.kelembaban}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium">Suhu Optimal:</span>
              <p className="text-gray-600 text-sm">{detail.habitat.suhu}</p>
            </div>
            <div>
              <span className="text-sm font-medium">Ketinggian:</span>
              <p className="text-gray-600 text-sm">{detail.habitat.ketinggian}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Ciri Khas */}
        <div>
          <h3 className="text-lg font-semibold">Ciri-ciri Khas</h3>
          <ul className="mt-2 space-y-2">
            {detail.ciriKhas.map((ciri, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 mt-2 rounded-full bg-green-500" />
                <span className="text-gray-600">{ciri}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Perawatan */}
        <div>
          <h3 className="text-lg font-semibold">Panduan Perawatan</h3>
          <div className="mt-2 space-y-4">
            <div>
              <h4 className="font-medium">Penyiraman</h4>
              <p className="text-gray-600 text-sm">{detail.perawatan.penyiraman}</p>
            </div>
            <div>
              <h4 className="font-medium">Pemupukan</h4>
              <p className="text-gray-600 text-sm">{detail.perawatan.pemupukan}</p>
            </div>
            <div>
              <h4 className="font-medium">Pemangkasan</h4>
              <p className="text-gray-600 text-sm">{detail.perawatan.pemangkasan}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Manfaat */}
        <div>
          <h3 className="text-lg font-semibold">Manfaat</h3>
          <ul className="mt-2 space-y-2">
            {detail.manfaat.map((manfaat, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500" />
                <span className="text-gray-600">{manfaat}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PalmDetailCard;
