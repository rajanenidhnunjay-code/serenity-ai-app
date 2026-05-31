import React, { useState } from "react";

interface SchoolLogoProps {
  className?: string;
  size?: number;
}

export default function SchoolLogo({ className = "", size = 120 }: SchoolLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed) {
    return (
      <div 
        className={`relative flex items-center justify-center rounded-full overflow-hidden bg-white border-2 border-[#D4AF37] shadow-sm select-none ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHW7-olPbZVvp9fOPH4V44JJ3atGa-Kpwt-qhFR2N7Xp0QwDZfemKg-QTlO-MlgjSVerexX0I9wn3d6NfRebtDnKoIxALOarSor5xpjFP2ImUiAz5kc46q2ro3lt2-e-ZTXaIG0=s512"
          alt="Serenity Model High School Logo"
          className="w-full h-full object-cover p-1 rounded-full"
          onError={() => setImgFailed(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <svg
      id="school-crest"
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <defs>
        {/* Shiny gold base gradient */}
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF099" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#AA771C" />
          <stop offset="100%" stopColor="#F3E5AB" />
        </linearGradient>

        {/* Outer gold ring stroke gradient */}
        <linearGradient id="gold-stroke" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B6508" />
          <stop offset="50%" stopColor="#FFDF00" />
          <stop offset="100%" stopColor="#8B6508" />
        </linearGradient>

        {/* 3D red ribbon gradient */}
        <linearGradient id="ribbon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#990000" />
          <stop offset="15%" stopColor="#CC0000" />
          <stop offset="50%" stopColor="#FF3333" />
          <stop offset="85%" stopColor="#CC0000" />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>

        <linearGradient id="ribbon-tail-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#AA0000" />
          <stop offset="100%" stopColor="#660000" />
        </linearGradient>

        {/* Sunburst radial glow */}
        <radialGradient id="sunburst-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2CC" stopOpacity="1" />
          <stop offset="80%" stopColor="#FFD966" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E69138" stopOpacity="0.3" />
        </radialGradient>

        {/* Swami Vivekananda robe shading */}
        <linearGradient id="robes-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A83232" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#5C0000" />
        </linearGradient>

        {/* Text curve paths */}
        {/* Upper arc path for "SERENITY MODEL HIGH SCHOOL" */}
        <path
          id="top-arc"
          d="M 32 150 A 118 118 0 0 1 268 150"
          fill="none"
        />
        {/* Lower arc path for "NAGARAM" */}
        <path
          id="bottom-arc"
          d="M 245 185 A 118 118 0 0 1 55 185"
          fill="none"
        />
      </defs>

      {/* 1. OUTER GOLD MEDALLION BACKGROUND & BORDERS */}
      <circle cx="150" cy="150" r="142" fill="url(#gold-gradient)" stroke="url(#gold-stroke)" strokeWidth="4" />
      <circle cx="150" cy="150" r="118" fill="none" stroke="#8B6508" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="150" cy="150" r="114" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="2.5" />

      {/* 2. INNER CIRCLE WITH SUNBURST & BOOK */}
      <g id="inner-crest-content">
        {/* Sunburst background */}
        <circle cx="150" cy="144" r="88" fill="url(#sunburst-glow)" />

        {/* Sunbeams rays */}
        <g opacity="0.35" stroke="#E69138" strokeWidth="1.5">
          <line x1="150" y1="144" x2="150" y2="60" />
          <line x1="150" y1="144" x2="210" y2="84" />
          <line x1="150" y1="144" x2="234" y2="144" />
          <line x1="150" y1="144" x2="210" y2="204" />
          <line x1="150" y1="144" x2="150" y2="228" />
          <line x1="150" y1="144" x2="90" y2="204" />
          <line x1="150" y1="144" x2="66" y2="144" />
          <line x1="150" y1="144" x2="90" y2="84" />
          {/* Intermediate rays */}
          <line x1="150" y1="144" x2="180" y2="70" />
          <line x1="150" y1="144" x2="225" y2="110" />
          <line x1="150" y1="144" x2="225" y2="178" />
          <line x1="150" y1="144" x2="180" y2="218" />
          <line x1="150" y1="144" x2="120" y2="218" />
          <line x1="150" y1="144" x2="75" y2="178" />
          <line x1="150" y1="144" x2="75" y2="110" />
          <line x1="150" y1="144" x2="120" y2="70" />
        </g>

        {/* OPEN BOOK (Behind Swami Vivekananda) */}
        <g id="open-book" transform="translate(150, 155) scale(0.9)">
          {/* Book Shadow */}
          <path d="M -85 0 C -45 15 -10 5 0 15 C 10 5 45 15 85 0 L 80 -60 C 40 -45 10 -50 0 -40 C -10 -50 -40 -45 -80 -60 Z" fill="#000000" opacity="0.15" />
          {/* Left Wing and Right Wing base */}
          <path d="M -80 -2 C -40 13 -10 3 0 12 C 10 3 40 13 80 -2 L 75 -62 C 35 -47 10 -52 0 -42 C -10 -52 -35 -47 -75 -62 Z" fill="#FFFFFF" stroke="#4a3728" strokeWidth="2" strokeLinejoin="miter" />
          {/* Inner pages layers */}
          <path d="M -77 -5 C -39 10 -9 1 0 9 C 9 1 39 10 77 -5 L 73 -62 C 35 -47 10 -52 0 -42 C -10 -52 -35 -47 -73 -62 Z" fill="#FFFFFF" opacity="0.9" />
          {/* Center binding line */}
          <line x1="0" y1="-42" x2="0" y2="9" stroke="#8B6508" strokeWidth="1.5" />
          {/* Book text indicators (Left and Right pages) */}
          <path d="M -60 -45 L -20 -38 M -60 -35 L -20 -28 M -60 -25 L -20 -18 M -65 -15 L -25 -8 M -65 -5 L -30 0" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 20 -38 L 60 -45 M 20 -28 L 60 -35 M 20 -18 L 60 -25 M 25 -8 L 65 -15 M 30 0 L 65 -5" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* SWAMI VIVEKANANDA VECTOR PORTRAIT MODEL */}
        <g id="vivekananda-portrait" transform="translate(150, 152)">
          {/* 1. Robes (Base chest & shoulders orange/red) */}
          <path
            d="M -56 50 C -48 30 -38 10 -22 -1 C -16 -6 -8 -11 0 -13 C 8 -11 16 -6 22 -1 C 38 10 48 30 56 50 Z"
            fill="url(#robes-grad)"
          />
          {/* Robe folds shading overlay */}
          <path d="M -18 -8 Q -5 18 12 50" stroke="#4A0000" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round" />
          <path d="M 16 -4 Q 5 20 -18 50" stroke="#4A0000" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round" />
          {/* Robe collar trim */}
          <path
            d="M -22 -1 C -18 -7 -10 -9 -5 -10 C -1 -10.5 1 -10.5 5 -10 C 10 -9 18 -7 22 -1 L 18 3 C 14 -1 8 -3 0 -3 C -8 -3 -14 -1 -18 3 Z"
            fill="#E65100"
          />

          {/* 2. Head & Neck */}
          {/* Neck skin */}
          <path d="M -13 -13 L -13 0 C -13 5 -5 12 0 12 C 5 12 13 5 13 0 L 13 -13 Z" fill="#FAD7A0" />
          <path d="M -13 -13 C -13 -13 -5 -6 0 -6 C 5 -6 13 -13 13 -13 Z" fill="#E59866" opacity="0.5" /> {/* Neck shadow */}
          
          {/* Face skin base */}
          <path
            d="M -18 -36 C -18 -48 -13 -52 0 -52 C 13 -52 18 -48 18 -36 C 18 -20 15 -12 0 -12 C -15 -12 -18 -20 -18 -36 Z"
            fill="#FBE2BC"
          />
          {/* Face shading / cheekbones */}
          <path d="M -18 -36 C -18 -45 -13 -48 -2 -48 C -3 -36 -5 -24 0 -14 C -12 -14 -18 -22 -18 -36 Z" fill="#FAD7A0" opacity="0.6" />

          {/* Hair (sideburns visible) */}
          <path d="M -17 -40 C -16 -44 -14 -46 -11 -46 L -13 -36 Z" fill="#3D2314" />
          <path d="M 17 -40 C 16 -44 14 -46 11 -46 L 13 -36 Z" fill="#3D2314" />

          {/* Eyebrows */}
          <path d="M -11 -42 C -8 -45 -4 -44 -1 -42" stroke="#2C160B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 11 -42 C 8 -45 4 -44 1 -42" stroke="#2C160B" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Eyes (Serene look) */}
          {/* White of eyes */}
          <ellipse cx="-6" cy="-37" rx="3.5" ry="1.8" fill="#FFFFFF" />
          <ellipse cx="6" cy="-37" rx="3.5" ry="1.8" fill="#FFFFFF" />
          {/* Pupils */}
          <circle cx="-5.5" cy="-37" r="1.8" fill="#2C160B" />
          <circle cx="5.5" cy="-37" r="1.8" fill="#2C160B" />
          {/* Eyelids */}
          <path d="M -10 -38 Q -6 -40 -2 -38" stroke="#2C160B" strokeWidth="1" fill="none" />
          <path d="M 2 -38 Q 6 -40 10 -38" stroke="#2C160B" strokeWidth="1" fill="none" />

          {/* Nose (Broad, dignified) */}
          <path d="M -1.8 -40 L -1.8 -30 C -1.8 -28 -3 -27 -3 -27 L 3 -27 C 3 -27 1.8 -28 1.8 -30 L 1.8 -40 Z" fill="none" stroke="#D35400" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M -2.5 -28 C 0 -26 0 -26 2.5 -28" fill="none" stroke="#D35400" strokeWidth="1.5" />

          {/* Lips (Serene meditative smile) */}
          <path d="M -8 -22 C -4 -19 4 -19 8 -22" stroke="#A93226" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M -6 -22.5 Q 0 -20 6 -22.5" stroke="#C0392B" strokeWidth="1" fill="none" />

          {/* Ear details */}
          <path d="M -18 -36 C -20 -36 -21 -32 -18 -30 Z" fill="#FAD7A0" />
          <path d="M 18 -36 C 20 -36 21 -32 18 -30 Z" fill="#FAD7A0" />

          {/* 3. ICONIC SAFFRON TURBAN (PAGRI) */}
          <g id="turban">
            {/* Base skull cover */}
            <path
              d="M -20 -44 C -20 -58 -10 -64 0 -64 C 10 -64 20 -58 20 -44 C 20 -43 22 -44 24 -46 C 24 -58 12 -68 0 -68 C -12 -68 -24 -58 -24 -46 C -22 -44 -20 -43 -20 -44 Z"
              fill="#FF6600"
            />
            {/* Horizontal wrap layers */}
            <path
              d="M -22 -45 C -10 -49 10 -49 22 -45 C 24 -42 18 -40 0 -40 C -18 -40 -24 -42 -22 -45 Z"
              fill="#FF8000"
              stroke="#D35400"
              strokeWidth="0.8"
            />
            {/* Beautiful folded wraps cross paths */}
            <path
              d="M -24 -48 C -12 -54 5 -54 20 -49 C 22 -42 12 -42 -2 -44 C -16 -46 -22 -44 -24 -48 Z"
              fill="#FF6600"
              stroke="#E65100"
              strokeWidth="0.8"
            />
            <path
              d="M -21 -53 C -5 -60 12 -58 23 -51 C 21 -47 11 -46 -3 -49 C -17 -52 -21 -50 -21 -53 Z"
              fill="#FF7701"
              stroke="#D35400"
              strokeWidth="0.8"
            />
            {/* Top knot/crest of turban folds */}
            <path
              d="M -12 -64 C -22 -62 -18 -74 -4 -75 C 6 -76 18 -70 14 -62 C 6 -66 -2 -67 -12 -64 Z"
              fill="#FF5500"
            />
            <path
              d="M -10 -63 Q 2 -72 10 -63"
              stroke="#B33F00"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M -5 -64 Q 0 -54 5 -64"
              stroke="#B33F00"
              strokeWidth="1"
              fill="none"
            />
          </g>
        </g>
      </g>

      {/* 3. LOGO TEXT: "SERENITY MODEL HIGH SCHOOL" & "NAGARAM" */}
      <g id="crest-text-block">
        <text fontFamily="system-ui, -apple-system, sans-serif" fontSize="14.8" fontWeight="900" fill="#1C355E" letterSpacing="0.8">
          <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
            SERENITY MODEL HIGH SCHOOL
          </textPath>
        </text>

        {/* Five-point star on left */}
        <path d="M 40 185 L 43 192 L 50 192 L 44 196 L 46 203 L 40 198 L 34 203 L 36 196 L 30 192 L 37 192 Z" fill="#D32F2F" stroke="#B71C1C" strokeWidth="0.5" />
        {/* Five-point star on right */}
        <path d="M 260 185 L 263 192 L 270 192 L 264 196 L 266 203 L 260 198 L 254 203 L 256 196 L 250 192 L 257 192 Z" fill="#D32F2F" stroke="#B71C1C" strokeWidth="0.5" />

        <text fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="900" fill="#222222" letterSpacing="3.5">
          <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">
            NAGARAM
          </textPath>
        </text>
      </g>

      {/* 4. DRAPED WAIST RIBBON: "PREPARES THE CHILD FOR LIFE" */}
      <g id="scrolling-ribbon" transform="translate(0, 32)">
        {/* Ribbon Left fold background */}
        <path d="M 12 178 L 38 158 L 38 190 L 12 198 Z" fill="url(#ribbon-tail-gradient)" stroke="#4A0000" strokeWidth="1.2" />
        <path d="M 12 198 L 30 188 L 12 178 Z" fill="#3A0000" /> {/* shadow notch left */}

        {/* Ribbon Right fold background */}
        <path d="M 288 178 L 262 158 L 262 190 L 288 198 Z" fill="url(#ribbon-tail-gradient)" stroke="#4A0000" strokeWidth="1.2" />
        <path d="M 288 198 L 270 188 L 288 178 Z" fill="#3A0000" /> {/* shadow notch right */}

        {/* Ribbon Connecting fold shadows */}
        <path d="M 38 185 L 50 185 L 50 191 Z" fill="#4C0000" />
        <path d="M 262 185 L 250 185 L 250 191 Z" fill="#4C0000" />

        {/* Ribbon Main Banner front body */}
        <path
          d="M 32 182 C 90 162 210 162 268 182 L 268 154 C 210 134 90 134 32 154 Z"
          fill="url(#ribbon-gradient)"
          stroke="#990000"
          strokeWidth="1"
          style={{ filter: "drop-shadow(0px 3px 2px rgba(0,0,0,0.25))" }}
        />

        {/* Gold trim outline for ribbon */}
        <path d="M 32 154 C 90 134 210 134 268 154" stroke="#FFF099" strokeWidth="1.5" fill="none" opacity="0.8" />
        <path d="M 32 182 C 90 162 210 162 268 182" stroke="#FFF099" strokeWidth="1.5" fill="none" opacity="0.8" />

        {/* Text inside Ribbon "Prepares The Child For Life" following subtle curve */}
        <path id="ribbon-text-path" d="M 34 169 C 91 149 209 149 266 169" fill="none" />
        <text fontFamily="'Lora', 'Georgia', serif" fontSize="11.8" fontWeight="900" fill="#FFFFFF">
          <textPath href="#ribbon-text-path" startOffset="50%" textAnchor="middle">
            Prepares The Child For Life
          </textPath>
        </text>
      </g>
    </svg>
  );
}
