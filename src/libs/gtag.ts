type SampleEvent = {
  action: "action_name";
  category: "category_name";
  label: string;
};

// If I want to analyze it in detail, I might add it.
export type Event = SampleEvent;

export const GA_ID = "G-N9H4136M6N";

export const pageview = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

export const event = ({ action, category, label }: Event) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
  });
};
