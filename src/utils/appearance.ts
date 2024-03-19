export type SizeProps = "sm" | "md" | "lg";

export function utilBoxShadowAppearance(
  shadow: SizeProps,
  rounded: SizeProps
): string {
  function utilBoxShadowSize(shadow: SizeProps) {
    const shadowLevel = {
      sm: "shadow-md",
      md: "shadow-lg",
      lg: "shadow-xl",
    };

    return shadowLevel[shadow];
  }

  function utilBoxShadowRounded(rounded: SizeProps) {
    const boxRounded = {
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl",
    };

    return boxRounded[rounded];
  }

  const boxRounded = rounded && utilBoxShadowRounded(rounded);
  const shadowLevel = shadow && utilBoxShadowSize(shadow);
  const classes = `${shadowLevel} ${boxRounded}`;

  return classes;
}
