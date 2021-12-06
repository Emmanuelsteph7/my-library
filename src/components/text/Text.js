import { MainHeader, Paragraph, H2, H3, SectionHeader, Span } from "./modules";

const Text = (props) => <Paragraph {...props} />;
Text.MainHeader = (props) => <MainHeader {...props} />;
Text.SectionHeader = (props) => <SectionHeader {...props} />;
Text.H2 = (props) => <H2 {...props} />;
Text.H3 = (props) => <H3 {...props} />;
Text.Span = (props) => <Span {...props} />;

export default Text;
