import Link from "next/link";

import { Blogs } from "@/src/components/Blogs";
import { Container } from "@/src/components/Container";
import { Events } from "@/src/components/Events";
import { Heading } from "@/src/components/Heading";
import { Highlight } from "@/src/components/Highlight";
import { Paragraph } from "@/src/components/Paragraph";
import { Partner } from "@/src/components/Partner";

import { getAllBlogs } from "@/lib/getAllBlogs";

export default async function Home() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta).splice(0, 5);
  return (
    <Container>
      <span className='text-4xl'>🇰🇷</span>
      <Heading className='font-black'>DatadogKRUG</Heading>
      {/*<div className='flex flex-col mt-5'>*/}
      {/*  <Heading as='h3' className='font-black !text-xl'>*/}
      {/*    Datadog LIVE Seoul 2024 설문조사*/}
      {/*  </Heading>*/}
      {/*  <div className='flex items-center gap-2 mt-2.5 mb-5 '>*/}
      {/*    <Link  href={"https://tally.so/r/31vddM"} className='hover:underline font-semibold' target={"_blank"}>*/}
      {/*      <Highlight>희망 세션 설문조사</Highlight>*/}
      {/*    </Link>*/}
      {/*    <Link href={"https://tally.so/r/wbLoBE"} className='hover:underline font-semibold' target={"_blank"}>*/}
      {/*      <Highlight>DatadogKRUG 발표신청</Highlight>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Paragraph className='max-w-xl mt-5'>
        <Highlight>DatadogKRUG (Datadog Korea User Group)</Highlight>은 Monitoring, Observability와 관련된 모든 주제에
        대해서 지식을 교류하며 함께 성장하는 모임입니다.
      </Paragraph>
      <Paragraph className='max-w-xl mt-4'>
        Datadog뿐만 아니라 Datadog에서 사용할 수 있는 수많은 Integrations 들에 대한 내용도 공유할 수 있습니다. 누구나
        참여해서 즐겁게 즐길 수 있는 분위기, 토론 및 질의응답, 네트워킹 하는 것을 지향합니다.
      </Paragraph>
      <Paragraph className='max-w-xl mt-5'>
        <Highlight>DatadogKRUG (Datadog Korea User Group)</Highlight> is a group that shares knowledge and grows
        together on all topics related to Monitoring and Observability.
      </Paragraph>
      <Paragraph className='max-w-xl mt-4'>
        In addition to Datadog, we also share content about the numerous integrations that can be used with Datadog. We
        aim to create an enjoyable atmosphere where anyone can participate, discuss, ask questions, and network.
      </Paragraph>
      <Heading as='h2' className='font-black text-lg md:text-lg lg:text-lg mt-20 mb-4'>
        What we do
      </Heading>
      <Events max={5} />
      <Heading as='h2' className='font-black text-lg md:text-lg lg:text-lg mt-20 mb-4'>
        Posts
      </Heading>
      <Blogs blogs={data} />
      <Partner />
    </Container>
  );
}
