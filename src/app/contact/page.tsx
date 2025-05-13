"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { RiKakaoTalkFill } from 'react-icons/ri';

// 임시 아티스트 데이터 (ID로 이름 찾기 용도)
const DUMMY_ARTISTS = [
  { id: "1", name: "DJ Alpha (KR)" },
  { id: "2", name: "Rapper Beta (KR)" },
  { id: "3", name: "Singer Gamma (JP)" },
  { id: "5", name: "DJ Epsilon (KR)" },
];

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange, required = false, placeholder = '' }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-white/80 mb-1">
      {label}{required && <span className="text-point-purple ml-1">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-3 py-2 bg-black border border-white/30 rounded-md focus:ring-point-purple focus:border-point-purple text-white text-base placeholder:text-white/30 placeholder:text-xs placeholder:italic"
    />
  </div>
);

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, value, onChange, required = false, placeholder = '', rows = 4 }) => (
   <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-white/80 mb-1">
      {label}{required && <span className="text-point-purple ml-1">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-3 py-2 bg-black border border-white/30 rounded-md focus:ring-point-purple focus:border-point-purple text-white text-base placeholder:text-white/30 placeholder:text-xs placeholder:italic"
    />
  </div>
);

// Component that uses useSearchParams
function ContactFormContent() {
  const searchParams = useSearchParams();
  const artistId = searchParams.get('artist');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [targetArtistName, setTargetArtistName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (artistId) {
      const artist = DUMMY_ARTISTS.find(a => a.id === artistId);
      setTargetArtistName(artist ? artist.name : '알 수 없는 아티스트');
    } else {
      setTargetArtistName(null); // Reset if no artistId
    }
  }, [artistId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // 필수 필드 검증 (간단 예시)
    if (!formData.name || !formData.email || !formData.eventType || !formData.eventDate || !formData.message) {
      setSubmitMessage('오류: 필수 항목(*)을 모두 입력해주세요.');
      setIsSubmitting(false);
      return;
    }

    // 이메일 형식 검증 (간단 예시)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('오류: 올바른 이메일 형식을 입력해주세요.');
      setIsSubmitting(false);
      return;
    }

    // 실제 제출 로직 (추후 백엔드 연동)
    console.log('Form Data Submitted:', { ...formData, targetArtist: targetArtistName });
    // 예시: API 호출
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ ...formData, targetArtist: targetArtistName }),
    //   });
    //   if (response.ok) {
    //     setSubmitMessage('문의가 성공적으로 제출되었습니다.');
    //     setFormData({ name: '', email: '', phone: '', company: '', eventType: '', eventDate: '', message: '' }); // 폼 초기화
    //     // router.push('/contact/success'); // 성공 페이지로 이동 (선택)
    //   } else {
    //     throw new Error('Server error');
    //   }
    // } catch (error) {
    //   setSubmitMessage('오류: 문의 제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
    // } finally {
    //   setIsSubmitting(false);
    // }

    // 임시 성공 처리
    setSubmitMessage('임시: 문의 내용이 콘솔에 출력되었습니다.');
    setTimeout(() => { // 메시지 잠시 보여주고 지우기
        setSubmitMessage('');
    }, 5000);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      {targetArtistName && (
        <div className="mb-6 p-3 bg-point-purple/20 border border-point-purple rounded-md text-center">
          <p className="text-sm text-white/80">문의 아티스트:</p>
          <p className="font-semibold text-point-purple">{targetArtistName}</p>
        </div>
      )}

      <InputField label="이름" name="name" value={formData.name} onChange={handleChange} required placeholder="담당자 성함"/>
      <InputField label="이메일" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="example@company.com"/>
      <InputField label="연락처" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="010-1234-5678 (선택 사항)"/>
      <InputField label="회사/단체명" name="company" value={formData.company} onChange={handleChange} placeholder="(선택 사항)"/>
      <InputField label="행사 종류" name="eventType" value={formData.eventType} onChange={handleChange} required placeholder="예: 페스티벌, 기업 행사, 클럽 파티"/>
      <InputField label="희망 날짜/기간" name="eventDate" value={formData.eventDate} onChange={handleChange} required placeholder="예: 2024년 10월 중순, 2024-12-24"/>
      <TextAreaField label="문의 내용" name="message" value={formData.message} onChange={handleChange} required placeholder="행사 상세 내용, 예산, 장소, 요구사항 등을 기재해주세요."/>

      {submitMessage && (
        <p className={`text-sm mb-4 ${submitMessage.startsWith('오류') ? 'text-red-500' : 'text-green-500'}`}>
          {submitMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 rounded-full bg-point-purple text-white text-lg font-bold shadow-lg 
                   hover:bg-white hover:text-point-purple transition-colors duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? '제출 중...' : '문의 제출'}
      </button>

      {/* KakaoTalk Button */}
      <div className="mt-4 text-center">
         <a
          href="http://pf.kakao.com/_axhyBn/chat" // 카카오톡 채널 채팅 URL로 변경
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FEE500] text-black text-lg font-bold shadow-lg 
                     hover:bg-yellow-400 transition-colors duration-200 w-full gap-2" // Added gap-2 and ensured items-center
        >
          <RiKakaoTalkFill size={24} />
          카카오톡으로 문의하기
        </a>
       </div>
    </form>
  );
}

// Main page component wrapping the content with Suspense
export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold text-white mt-6 mb-6 text-center">문의하기</h1>
      <Suspense fallback={<div className='text-white/70 text-center py-10'>폼 로딩 중...</div>}>
        <ContactFormContent />
      </Suspense>

      {/* 하단 여백 추가 */}
      <div className="h-48" />
    </div>
  );
} 