import { CustomCard } from "@/components";
import { Container } from "@/components/layout";
import { type Locale, getDictionary } from "@/dictionaries";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export default async function Home(props: Props) {
  const params = await props.params;

  const {
    lang
  } = params;

  const dict = await getDictionary(lang);

  return (
    <Container>
      <CustomCard title={dict.home.title} description={dict.home.description} />
    </Container>
  );
}
