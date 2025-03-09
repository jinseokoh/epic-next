import { getHomePageData } from "@/data/loaders";

import { FeaturesSection } from "@/components/custom/features-section";
import { HeroSection } from "@/components/custom/hero-section";

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData?.data || [];
  return <main>{blocks.map(blockRenderer)}</main>;
}

const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.features-section": FeaturesSection,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block} /> : null;
}