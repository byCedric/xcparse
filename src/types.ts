export type SourceTree = "DEVELOPER_DIR" | "<group>" | "SDKROOT";

/** Elements: http://www.monobjc.net/xcode-project-file-format.html */
export enum ISA {
  PBXBuildFile = "PBXBuildFile",
  PBXBuildPhase = "PBXBuildPhase",
  /*-*/ PBXAppleScriptBuildPhase = "PBXAppleScriptBuildPhase",
  /*-*/ PBXCopyFilesBuildPhase = "PBXCopyFilesBuildPhase",
  /*-*/ PBXFrameworksBuildPhase = "PBXFrameworksBuildPhase",
  /*-*/ PBXHeadersBuildPhase = "PBXHeadersBuildPhase",
  /*-*/ PBXResourcesBuildPhase = "PBXResourcesBuildPhase",
  /*-*/ PBXShellScriptBuildPhase = "PBXShellScriptBuildPhase",
  /*-*/ PBXSourcesBuildPhase = "PBXSourcesBuildPhase",
  PBXContainerItemProxy = "PBXContainerItemProxy",
  PBXFileElement = "PBXFileElement",
  /*-*/ PBXFileReference = "PBXFileReference",
  /*-*/ PBXGroup = "PBXGroup",
  /*-*/ PBXVariantGroup = "PBXVariantGroup",
  PBXTarget = "PBXTarget",
  /*-*/ PBXAggregateTarget = "PBXAggregateTarget",
  /*-*/ PBXLegacyTarget = "PBXLegacyTarget",
  /*-*/ PBXNativeTarget = "PBXNativeTarget",
  PBXProject = "PBXProject",
  PBXTargetDependency = "PBXTargetDependency",
  XCBuildConfiguration = "XCBuildConfiguration",
  XCConfigurationList = "XCConfigurationList",
}

export type ProductType =
  | "com.apple.product-type.application"
  | "com.apple.product-type.app-extension"
  | "com.apple.product-type.bundle"
  | "com.apple.product-type.tool"
  | "com.apple.product-type.library.dynamic"
  | "com.apple.product-type.framework"
  | "com.apple.product-type.library.static"
  | "com.apple.product-type.bundle.unit-test"
  | "com.apple.product-type.application.watchapp"
  | "com.apple.product-type.application.watchapp2"
  | "com.apple.product-type.application.on-demand-install-capable"
  | "com.apple.product-type.watchkit-extension"
  | "com.apple.product-type.watchkit2-extension";

interface Object<TISA extends ISA> {
  /** custom */
  _id?: string;
  isa: TISA;
}

export interface XcodeProject {
  archiveVersion: string;
  classes: Record<string, any>;
  objectVersion: string;
  objects: Record<string, Object<any>>;
  rootObject: string;
}

export interface PBXFileReference extends Object<ISA.PBXFileReference> {
  isa: ISA.PBXFileReference;
  children?: string[];
  basename: string;
  lastKnownFileType?: string;
  group?: string;
  path?: string;
  fileEncoding?: number;
  defaultEncoding?: number;
  sourceTree: SourceTree;
  includeInIndex?: number;
  explicitFileType?: unknown;
  settings?: object;
  uuid?: string;
  fileRef: string;
  target?: string;
}

export interface PBXShellScriptBuildPhase
  extends Object<ISA.PBXShellScriptBuildPhase> {
  buildActionMask: string;
  files: any[];
  inputPaths: string[];
  name: string;
  outputPaths: string[];
  runOnlyForDeploymentPostprocessing: string;
  shellPath: string;
  shellScript: string;
  inputFileListPaths?: any[];
  outputFileListPaths?: any[];
  showEnvVarsInLog?: string;
}

export interface PBXFrameworksBuildPhase
  extends Object<ISA.PBXFrameworksBuildPhase> {
  buildActionMask: string;
  files: string[];
  runOnlyForDeploymentPostprocessing: string;
}

/** This is the element for a build target that aggregates several others. */
export interface PBXAggregateTarget extends PBXTarget<ISA.PBXAggregateTarget> {
  buildConfigurationList: string;
  buildPhases: string[];
  dependencies: string[];
  name: string;
  productName: string;
}

export interface PBXNativeTarget extends PBXTarget<ISA.PBXNativeTarget> {
  buildConfigurationList: string;
  buildPhases: string[];
  buildRules: any[];
  dependencies: string[];
  name: string;
  productName: string;
  productReference: string;
  productType: ProductType;
}

export interface PBXBuildFile extends Object<ISA.PBXBuildFile> {
  fileRef: string;
}

export interface PBXContainerItemProxy
  extends Object<ISA.PBXContainerItemProxy> {
  containerPortal: string;
  proxyType: string;
  remoteGlobalIDString: string;
  remoteInfo: string;
}

/** This element is an abstract parent for specialized targets. */
export interface PBXTarget<
  TTargetIsa extends
    | ISA.PBXAggregateTarget
    | ISA.PBXLegacyTarget
    | ISA.PBXNativeTarget
> extends Object<TTargetIsa> {
  target: string;
  targetProxy: string;
}
export interface PBXTargetDependency extends Object<ISA.PBXTargetDependency> {
  target: string;
  targetProxy: string;
}

export interface XCConfigurationList extends Object<ISA.XCConfigurationList> {
  buildConfigurations: string[];
  defaultConfigurationIsVisible: string;
  defaultConfigurationName: string;
}

export interface XCBuildConfiguration extends Object<ISA.XCBuildConfiguration> {
  baseConfigurationReference: string;
  buildSettings: BuildSettings;
  name: string;
}

export interface PBXGroup extends Object<ISA.PBXGroup> {
  children: string[];
  indentWidth: string;
  sourceTree: SourceTree;
  tabWidth: string;
  usesTabs: string;
}

export interface PBXProject extends Object<ISA.PBXProject> {
  attributes: Attributes;
  buildConfigurationList: string;
  compatibilityVersion: string;
  developmentRegion: string;
  hasScannedForEncodings: string;
  knownRegions: string[];
  mainGroup: string;
  productRefGroup: string;
  projectDirPath: string;
  projectRoot: string;
  targets: string[];
}

export interface Attributes {
  LastUpgradeCheck: string;
  TargetAttributes: Record<string, TargetAttribute>;
}

export type TargetAttribute =
  | {
      CreatedOnToolsVersion: string;
      TestTargetID: string;
    }
  | {
      LastSwiftMigration: string;
    };

export interface XCBuildConfiguration extends Object<ISA.XCBuildConfiguration> {
  buildSettings: BuildSettings;
  name: string;
}

export interface BuildSettings {
  BUNDLE_LOADER: string;
  IPHONEOS_DEPLOYMENT_TARGET: string;
  PRODUCT_BUNDLE_IDENTIFIER: string;
  PRODUCT_NAME: string;
  TEST_HOST: string;
  COPY_PHASE_STRIP?: string;
  ASSETCATALOG_COMPILER_APPICON_NAME: string;
  CURRENT_PROJECT_VERSION: string;
  ENABLE_BITCODE?: string;
  INFOPLIST_FILE: string;
  LD_RUNPATH_SEARCH_PATHS: string;
  OTHER_LDFLAGS: string[];
  SWIFT_OPTIMIZATION_LEVEL?: string;
  SWIFT_VERSION: string;
  VERSIONING_SYSTEM: string;
  ALWAYS_SEARCH_USER_PATHS: string;
  CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED: string;
  CLANG_CXX_LANGUAGE_STANDARD: string;
  CLANG_CXX_LIBRARY: string;
  CLANG_ENABLE_MODULES: string;
  CLANG_ENABLE_OBJC_ARC: string;
  CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING: string;
  CLANG_WARN_BOOL_CONVERSION: string;
  CLANG_WARN_COMMA: string;
  CLANG_WARN_CONSTANT_CONVERSION: string;
  CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS: string;
  CLANG_WARN_DIRECT_OBJC_ISA_USAGE: string;
  CLANG_WARN_EMPTY_BODY: string;
  CLANG_WARN_ENUM_CONVERSION: string;
  CLANG_WARN_INFINITE_RECURSION: string;
  CLANG_WARN_INT_CONVERSION: string;
  CLANG_WARN_NON_LITERAL_NULL_CONVERSION: string;
  CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF: string;
  CLANG_WARN_OBJC_LITERAL_CONVERSION: string;
  CLANG_WARN_OBJC_ROOT_CLASS: string;
  CLANG_WARN_RANGE_LOOP_ANALYSIS: string;
  CLANG_WARN_STRICT_PROTOTYPES: string;
  CLANG_WARN_SUSPICIOUS_MOVE: string;
  CLANG_WARN_UNREACHABLE_CODE: string;
  CLANG_WARN__DUPLICATE_METHOD_MATCH: string;
  "CODE_SIGN_IDENTITY[sdk=iphoneos*]": string;
  ENABLE_STRICT_OBJC_MSGSEND: string;
  ENABLE_TESTABILITY?: string;
  GCC_C_LANGUAGE_STANDARD: string;
  GCC_DYNAMIC_NO_PIC?: string;
  GCC_NO_COMMON_BLOCKS: string;
  GCC_OPTIMIZATION_LEVEL?: string;
  GCC_PREPROCESSOR_DEFINITIONS?: string[];
  GCC_SYMBOLS_PRIVATE_EXTERN?: string;
  GCC_WARN_64_TO_32_BIT_CONVERSION: string;
  GCC_WARN_ABOUT_RETURN_TYPE: string;
  GCC_WARN_UNDECLARED_SELECTOR: string;
  GCC_WARN_UNINITIALIZED_AUTOS: string;
  GCC_WARN_UNUSED_FUNCTION: string;
  GCC_WARN_UNUSED_VARIABLE: string;
  LIBRARY_SEARCH_PATHS: string[];
  MTL_ENABLE_DEBUG_INFO: string;
  ONLY_ACTIVE_ARCH?: string;
  SDKROOT: string;
  ENABLE_NS_ASSERTIONS?: string;
  VALIDATE_PRODUCT?: string;
}
