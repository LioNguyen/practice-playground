import DOMPURIFY from "dompurify";

export const sanitizedData = (innerHTML: string | Node) => {
  if (!innerHTML) return innerHTML;

  DOMPURIFY.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener");
    }
  });

  return DOMPURIFY.sanitize(innerHTML);
};

export const getSearchParams = (params: URLSearchParams) => {
  let obj: Record<string, string> = {};
  for (let [key, value] of params.entries()) {
    obj[key] = value;
  }

  return obj;
};
