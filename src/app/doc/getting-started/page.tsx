import AcknowledgementsContent from '@/components/doc/gettingStarted/Acknowledgements';
import IntroductionContent from '@/components/doc/gettingStarted/Introduction';
import SuggestedCitationContent from '@/components/doc/gettingStarted/SuggestedCitation';

export default function GettingStarted() {
  return (
    <>
      <IntroductionContent />
      <AcknowledgementsContent />
      <SuggestedCitationContent />
    </>
  );
}
