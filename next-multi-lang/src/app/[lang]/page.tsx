import { CustomCard } from "@/components";
import { Container } from "@/components/layout";
import { type Locale, getDictionary } from "@/dictionaries";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);

  return (
    <Container>
      <CustomCard title={dict.home.title} description={dict.home.description} />
    </Container>
  );
}
