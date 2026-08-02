import { dark } from "@clerk/themes";

export const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorPrimary: "#8B6F47",
    colorBackground: "#EDE8DC",
    colorInputBackground: "rgba(15, 23, 42, 0.9)",
    colorInputText: "#2C1810",
    colorText: "#2C1810",
    colorTextSecondary: "#6B5744",
    borderRadius: "0.75rem",
  },
  elements: {
    card: "bg-[#EDE8DC] text-[#2C1810] border border-[#C4B49A] shadow-2xl",
    headerTitle: "text-[#2C1810]",
    headerSubtitle: "text-[#2C1810]",
    socialButtonsBlockButton: "bg-[#EDE8DC] border-[#C4B49A] text-[#2C1810] hover:bg-[#EDE8DC]",
    formButtonPrimary: "bg-[#8B6F47] hover:bg-[#8B6F47] text-[#2C1810] font-bold",
    formFieldInput: "bg-[#EDE8DC] border-[#C4B49A] text-[#2C1810] focus:border-[#C4B49A]",
    formFieldLabel: "text-[#2C1810]",
    footerActionText: "text-[#2C1810]",
    footerActionLink: "text-[#8B6F47] hover:text-[#8B6F47]",
    identityPreviewText: "text-[#2C1810]",
    userButtonPopoverCard: "bg-[#EDE8DC] text-[#2C1810] border border-[#C4B49A] shadow-2xl z-[9999]",
    userButtonPopoverActions: "bg-[#EDE8DC]",
    userButtonPopoverActionButton: "hover:bg-[#EDE8DC] text-[#2C1810]",
    userButtonPopoverFooter: "bg-[#EDE8DC]",
  },
};
