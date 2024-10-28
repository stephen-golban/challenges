import { CustomCard } from "@/components";
import { Container } from "@/components/layout";

import { type Locale, getDictionary } from "@/dictionaries";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <Container>
      <CustomCard
        title={dict.about.title}
        description={dict.about.description}
      />
    </Container>
  );
}
