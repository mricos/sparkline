// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sa9cdtG5u1tnrsRL4NJAW9
// Component: qA5G_6re19j-
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sparkline.module.css"; // plasmic-import: sa9cdtG5u1tnrsRL4NJAW9/projectcss
import sty from "./PlasmicLogoCloudSection2.module.css"; // plasmic-import: qA5G_6re19j-/css

export type PlasmicLogoCloudSection2__VariantMembers = {};

export type PlasmicLogoCloudSection2__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogoCloudSection2__VariantsArgs;
export const PlasmicLogoCloudSection2__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLogoCloudSection2__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLogoCloudSection2__ArgsType;
export const PlasmicLogoCloudSection2__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicLogoCloudSection2__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultLogoCloudSection2Props {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicLogoCloudSection2__RenderFunc(props: {
  variants: PlasmicLogoCloudSection2__VariantsArgs;
  args: PlasmicLogoCloudSection2__ArgsType;
  overrides: PlasmicLogoCloudSection2__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___4Ej1B)}
                displayHeight={"48px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={{
                  src: "/plasmic/sparkline/images/loomsvg2.svg",
                  fullWidth: 300,
                  fullHeight: 91,
                  aspectRatio: 3.303226
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__eYuZt)}
                displayHeight={"48px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={{
                  src: "/plasmic/sparkline/images/strapisvg2.svg",
                  fullWidth: 300,
                  fullHeight: 78,
                  aspectRatio: 3.849624
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___4LIz)}
                displayHeight={"48px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={{
                  src: "/plasmic/sparkline/images/segmentsvg2.svg",
                  fullWidth: 300,
                  fullHeight: 62,
                  aspectRatio: 4.87619
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__d5Zka)}
                displayHeight={"48px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={{
                  src: "/plasmic/sparkline/images/xstate1Svg.svg",
                  fullWidth: 300,
                  fullHeight: 94,
                  aspectRatio: 3.2
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__kz3L7)}
                displayHeight={"48px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={{
                  src: "/plasmic/sparkline/images/mapboxsvg2.svg",
                  fullWidth: 300,
                  fullHeight: 67,
                  aspectRatio: 4.491228
                }}
              />
            </React.Fragment>
          ),
          value: args.children
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogoCloudSection2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogoCloudSection2__VariantsArgs;
    args?: PlasmicLogoCloudSection2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogoCloudSection2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLogoCloudSection2__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogoCloudSection2__ArgProps,
          internalVariantPropNames: PlasmicLogoCloudSection2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLogoCloudSection2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogoCloudSection2";
  } else {
    func.displayName = `PlasmicLogoCloudSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicLogoCloudSection2 = Object.assign(
  // Top-level PlasmicLogoCloudSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicLogoCloudSection2
    internalVariantProps: PlasmicLogoCloudSection2__VariantProps,
    internalArgProps: PlasmicLogoCloudSection2__ArgProps
  }
);

export default PlasmicLogoCloudSection2;
/* prettier-ignore-end */
