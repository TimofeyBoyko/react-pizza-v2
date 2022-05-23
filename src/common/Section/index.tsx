import React from "react";

import StyledSection from "./StyledSection";

type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  const [sectionFilterContent, setSectionFilterContent] =
    React.useState<React.ReactNode>(null);
  const [sectionBodyContent, setSectionBodyContent] =
    React.useState<React.ReactNode>(null);

  React.useEffect(() => {
    React.Children.forEach(children, (child: React.ReactNode) => {
      if (React.isValidElement(child)) {
        const type = typeof child.type;

        if (type === "function") {
          const childType = child.type as () => null;

          switch (childType.name) {
            case Section.Filter.name:
              setSectionFilterContent(child.props.children);
              break;

            case Section.Body.name:
              setSectionBodyContent(child.props.children);
              break;

            default:
              break;
          }
        }
      }
    });
  }, [children]);

  const filterAvailable: boolean = !!sectionFilterContent;
  const bodyAvailable: boolean = !!sectionBodyContent;

  return (
    <StyledSection withFilter={filterAvailable}>
      {filterAvailable && (
        <div className="section_filter">{sectionFilterContent}</div>
      )}
      {bodyAvailable && (
        <div className="section_body">{sectionBodyContent}</div>
      )}
    </StyledSection>
  );
};

function Filter({ children }: { children: React.ReactNode }) {
  return null;
}

Filter.displayName = "Filter";

Section.Filter = Filter;

function Body({ children }: { children: React.ReactNode }) {
  return null;
}

Body.displayName = "Body";

Section.Body = Body;

export default Section;
