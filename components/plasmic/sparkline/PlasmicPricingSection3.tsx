// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sa9cdtG5u1tnrsRL4NJAW9
// Component: ka15LM9W-d3r
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
import Divider from "../../Divider"; // plasmic-import: 0tFV9O7Pw9U3/component
import Valueprop from "../../Valueprop"; // plasmic-import: TeGYHKYxFO1a/component
import Button from "../../Button"; // plasmic-import: ubZ4DzFcB6XW/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sparkline.module.css"; // plasmic-import: sa9cdtG5u1tnrsRL4NJAW9/projectcss
import sty from "./PlasmicPricingSection3.module.css"; // plasmic-import: ka15LM9W-d3r/css

import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: 0YDKk3_SERyf/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: R_QItIJ5-MOY/icon

export type PlasmicPricingSection3__VariantMembers = {};

export type PlasmicPricingSection3__VariantsArgs = {};
type VariantPropType = keyof PlasmicPricingSection3__VariantsArgs;
export const PlasmicPricingSection3__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPricingSection3__ArgsType = {
  foreground?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPricingSection3__ArgsType;
export const PlasmicPricingSection3__ArgProps = new Array<ArgPropType>(
  "foreground"
);

export type PlasmicPricingSection3__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  foreground?: p.Flex<"div">;
};

export interface DefaultPricingSection3Props {
  foreground?: React.ReactNode;
  className?: string;
}

function PlasmicPricingSection3__RenderFunc(props: {
  variants: PlasmicPricingSection3__VariantsArgs;
  args: PlasmicPricingSection3__ArgsType;
  overrides: PlasmicPricingSection3__OverridesType;

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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"foreground"}
        data-plasmic-override={overrides.foreground}
        hasGap={true}
        className={classNames(projectcss.all, sty.foreground)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rq1YR)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__g5Hwd)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dRcGc
                    )}
                  >
                    {"Pricing plans"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8Kz4E
                  )}
                >
                  {
                    "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                  }
                </div>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox__jneUc)}>
                <div className={classNames(projectcss.all, sty.freeBox__you63)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___904Im)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__eW8X
                      )}
                    >
                      {"Starter"}
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___5EZhp
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___3JqHk
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__sKuSy
                          )}
                        >
                          {"$"}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___3QQgf
                          )}
                        >
                          {"8"}
                        </div>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__vgSk
                        )}
                      >
                        {"/month"}
                      </div>
                    </p.Stack>
                  </p.Stack>

                  <Divider
                    className={classNames("__wab_instance", sty.divider__oOmCb)}
                  />

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___8BN1G)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__kYsI)}
                    >
                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__u2YLy
                        )}
                        flatIcon={true}
                        justDescription={true}
                        slot={
                          "Vestibulum mollis odio dictum ultrices facilisis molestie vestibulum"
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wtzgo
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__mrHyw
                            )}
                            role={"img"}
                          />
                        }
                      />

                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__w9MxA
                        )}
                        flatIcon={true}
                        justDescription={true}
                        slot={"Mus consequat a justo"}
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__pGu5M
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__jwlnE
                            )}
                            role={"img"}
                          />
                        }
                      />
                    </p.Stack>

                    <Button
                      colors={"white" as const}
                      extraSmallShadow={true}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__bY9Vx
                          )}
                        >
                          {"Buy starter"}
                        </div>
                      }
                    />
                  </p.Stack>
                </div>

                <div
                  className={classNames(projectcss.all, sty.freeBox___5Obsh)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___9VMhw)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hfMx
                      )}
                    >
                      {"Pro"}
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__mb51Q)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__z4Yu7
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__z6S3E
                          )}
                        >
                          {"$"}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___5FQqB
                          )}
                        >
                          {"16"}
                        </div>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__iuy77
                        )}
                      >
                        {"/month"}
                      </div>
                    </p.Stack>
                  </p.Stack>

                  <Divider
                    className={classNames("__wab_instance", sty.divider__vEIrA)}
                  />

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__mnbNf)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__uIkPb)}
                    >
                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop___1AP34
                        )}
                        flatIcon={true}
                        justDescription={true}
                        slot={
                          "Ligula primis mollis sem dignissim semper lectus parturient"
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__aPphw
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hyRsq
                            )}
                            role={"img"}
                          />
                        }
                      />

                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__fJn4W
                        )}
                        flatIcon={true}
                        justDescription={true}
                        slot={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__mr2Av
                            )}
                          >
                            {"A curabitur dignissim pharetra porta suscipit"}
                          </div>
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__z9RUt
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__g066E
                            )}
                            role={"img"}
                          />
                        }
                      />

                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__qK3Vm
                        )}
                        flatIcon={true}
                        justDescription={true}
                        slot={
                          "Condimentum diam a et sapien praesent potenti torquent a eros"
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg___5Yc
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wprB6
                            )}
                            role={"img"}
                          />
                        }
                      />

                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__rruQ2
                        )}
                        flatIcon={true}
                        justDescription={true}
                        slot={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__vvetl
                            )}
                          >
                            {"Conubia in hac eu elementum sodales"}
                          </div>
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__xQeX2
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__oPwWr
                            )}
                            role={"img"}
                          />
                        }
                      />
                    </p.Stack>

                    <Button
                      colors={"green" as const}
                      extraSmallShadow={true}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__eVesu
                          )}
                        >
                          {"Buy pro"}
                        </div>
                      }
                    />
                  </p.Stack>
                </div>

                <div
                  className={classNames(projectcss.all, sty.freeBox___846Dt)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___1Rdah)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__trHzi
                      )}
                    >
                      {"Team"}
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__r0QJh)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__koeFt
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xZKbi
                          )}
                        >
                          {"$"}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__g1KM
                          )}
                        >
                          {"10"}
                        </div>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eMk98
                        )}
                      >
                        {"/member"}
                      </div>
                    </p.Stack>
                  </p.Stack>

                  <Divider
                    className={classNames("__wab_instance", sty.divider__yKbjY)}
                  />

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__jeejl)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__hwbgN)}
                    >
                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__cpf4B
                        )}
                        flatIcon={true}
                        justDescription={true}
                        slot={"Ad nam curae a potenti platea"}
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__iGlws
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__gqqbZ
                            )}
                            role={"img"}
                          />
                        }
                      />

                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__llEb0
                        )}
                        flatIcon={true}
                        justDescription={true}
                        slot={
                          "A adipiscing scelerisque pretium consectetur sem"
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__diUf0
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg___5XqJc
                            )}
                            role={"img"}
                          />
                        }
                      />
                    </p.Stack>

                    <Button
                      colors={"white" as const}
                      extraSmallShadow={true}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___3E5Z
                          )}
                        >
                          {"Buy team"}
                        </div>
                      }
                    />
                  </p.Stack>
                </div>
              </div>
            </React.Fragment>
          ),
          value: args.foreground
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "foreground"],
  freeBox: ["freeBox"],
  foreground: ["foreground"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  foreground: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPricingSection3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPricingSection3__VariantsArgs;
    args?: PlasmicPricingSection3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPricingSection3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPricingSection3__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPricingSection3__ArgProps,
          internalVariantPropNames: PlasmicPricingSection3__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPricingSection3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingSection3";
  } else {
    func.displayName = `PlasmicPricingSection3.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingSection3 = Object.assign(
  // Top-level PlasmicPricingSection3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    foreground: makeNodeComponent("foreground"),

    // Metadata about props expected for PlasmicPricingSection3
    internalVariantProps: PlasmicPricingSection3__VariantProps,
    internalArgProps: PlasmicPricingSection3__ArgProps
  }
);

export default PlasmicPricingSection3;
/* prettier-ignore-end */
