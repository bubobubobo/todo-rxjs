import CSS from "csstype";

/**
 * TODO LIST WRAP
 */
export const listWrap: CSS.Properties = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  flexDirection: "column",
  padding: "2em 4em",
};

/**
 * TODO CONTENT WRAP
 */
export const todoContentWrap: CSS.Properties = {
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
};

/**
 * TODO CONTENT
 */
export const todoContentTitle: CSS.Properties = {
  fontSize: "1.6rem",
};

/**
 * TODO ADD BUTTON, TODO DELETE BUTTON
 */
export const button: CSS.Properties = {
  fontSize: "0.9rem",
  borderRadius: "6px",
  padding: "0.4em 0.8em",
  marginRight: "0.8em",
};

export const todoInput: CSS.Properties = {
  fontSize: "0.9rem",
  padding: "0.4em",
  width: "400px",
  marginBottom: "10px",
};

/**
 * TODO TOGGLE
 */
export const toggleCheckBox: CSS.Properties = {
  zoom: "1.5",
  padding: "10px",
};

/**
 * TODO BUTTON WRAP
 */
export const buttonWrap: CSS.Properties = {
  display: "flex",
  alignItems: "center",
};

/**
 * TODO ADD
 */
export const inputFormWrap: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "20px",
};
