import React from 'react';
import { useCookies } from 'react-cookie';

const fontScaleFactors = {'small': 1, 'medium': 1.44, 'large': 2.074}

export const RunIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize]
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.25331 11.0714C1.12931 11.0714 1.01039 11.0262 0.922706 10.9458C0.835025 10.8655 0.785767 10.7564 0.785767 10.6428V1.21415C0.785781 1.13967 0.806965 1.06649 0.847232 1.0018C0.8875 0.937121 0.94546 0.883173 1.0154 0.845278C1.08534 0.807382 1.16485 0.786847 1.24608 0.785696C1.32732 0.784545 1.40748 0.802818 1.47866 0.838715L10.8294 5.55303C10.9027 5.59003 10.9639 5.64438 11.0064 5.71042C11.049 5.77646 11.0715 5.85176 11.0715 5.92847C11.0715 6.00517 11.049 6.08047 11.0064 6.14651C10.9639 6.21255 10.9027 6.2669 10.8294 6.3039L1.47866 11.0182C1.40963 11.0531 1.33211 11.0713 1.25331 11.0714Z" fill="#1A1A1A"/>
    </svg>
  )
}

export const StopIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize]
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.71429 0.5H10.2857C10.7404 0.5 11.1764 0.680612 11.4979 1.0021C11.8194 1.32359 12 1.75963 12 2.21429V10.7857C12 11.2404 11.8194 11.6764 11.4979 11.9979C11.1764 12.3194 10.7404 12.5 10.2857 12.5H1.71429C1.25963 12.5 0.823593 12.3194 0.502103 11.9979C0.180612 11.6764 0 11.2404 0 10.7857V2.21429C0 1.75963 0.180612 1.32359 0.502103 1.0021C0.823593 0.680612 1.25963 0.5 1.71429 0.5Z" fill="white"/>
    </svg>
  )
}