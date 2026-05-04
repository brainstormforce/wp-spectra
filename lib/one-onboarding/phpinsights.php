<?php

declare(strict_types=1);

return [

	/*
	|--------------------------------------------------------------------------
	| Default Preset
	|--------------------------------------------------------------------------
	|
	| This option controls the default preset that will be used by PHP Insights
	| to make your code reliable, simple, and clean. However, you can always
	| adjust the `Metrics` and `Insights` below in this configuration file.
	|
	| Supported: "default", "laravel", "symfony", "magento2", "drupal", "wordpress"
	|
	*/

	'preset'       => 'wordpress',

	/*
	|--------------------------------------------------------------------------
	| IDE
	|--------------------------------------------------------------------------
	|
	| This options allow to add hyperlinks in your terminal to quickly open
	| files in your favorite IDE while browsing your PhpInsights report.
	|
	| Supported: "textmate", "macvim", "emacs", "sublime", "phpstorm",
	| "atom", "vscode".
	|
	| If you have another IDE that is not in this list but which provide an
	| url-handler, you could fill this config with a pattern like this:
	|
	| myide://open?url=file://%f&line=%l
	|
	*/

	'ide'          => null,

	/*
	|--------------------------------------------------------------------------
	| Configuration
	|--------------------------------------------------------------------------
	|
	| Here you may adjust all the various `Insights` that will be used by PHP
	| Insights. You can either add, remove or configure `Insights`. Keep in
	| mind, that all added `Insights` must belong to a specific `Metric`.
	|
	*/

	'exclude'      => [
		'assets/',
		'artifacts/',
		'bin/',
		'languages/',
		'lib/',
		'node_modules/',
		'tests/',
		'vendor/',
		'wordpress/',
		'phpinsights.php',
	],

	'add'          => [],

	'remove'       => [
		/**
		 * Globals accesses detected
		 * ToDo: Remove this rule after fixing the issue
		 */
		\NunoMaduro\PhpInsights\Domain\Insights\ForbiddenGlobals::class,

		/**
		 * Global keyword
		 * ToDo: Remove this rule after fixing the issue
		 */
		\PHP_CodeSniffer\Standards\Squiz\Sniffs\PHP\GlobalKeywordSniff::class,

		/**
		 * Defining global helpers is prohibited
		 * ToDo: Remove this rule after fixing the issue
		 */
		\NunoMaduro\PhpInsights\Domain\Insights\ForbiddenDefineFunctions::class,

		/**
		 * Return, Property, Parameter type hint
		 */
		\SlevomatCodingStandard\Sniffs\TypeHints\ReturnTypeHintSniff::class,
		\SlevomatCodingStandard\Sniffs\TypeHints\PropertyTypeHintSniff::class,
		\SlevomatCodingStandard\Sniffs\TypeHints\ParameterTypeHintSniff::class,

		/**
		 * Disallow mixed type hint
		 */
		\SlevomatCodingStandard\Sniffs\TypeHints\DisallowMixedTypeHintSniff::class,

		/**
		 * Disallow empty
		 */
		\SlevomatCodingStandard\Sniffs\ControlStructures\DisallowEmptySniff::class,

		/**
		 * Forbidden public property
		 */
		\SlevomatCodingStandard\Sniffs\Classes\ForbiddenPublicPropertySniff::class,

		/**
		 * Function length
		 */
		\SlevomatCodingStandard\Sniffs\Functions\FunctionLengthSniff::class,

		/**
		 * Valid class name, not in PascalCase format.
		 */
		\PHP_CodeSniffer\Standards\Squiz\Sniffs\Classes\ValidClassNameSniff::class,

		/**
		 * No spaces around offset.
		 */
		\PhpCsFixer\Fixer\Whitespace\NoSpacesAroundOffsetFixer::class,

		/**
		 * Side effects.
		 */
		\PHP_CodeSniffer\Standards\PSR1\Sniffs\Files\SideEffectsSniff::class,

		/**
		 * Arbitrary parentheses spacing
		 */
		\PHP_CodeSniffer\Standards\Generic\Sniffs\WhiteSpace\ArbitraryParenthesesSpacingSniff::class,

		/**
		 * Character before p h p opening tag
		 */
		\PHP_CodeSniffer\Standards\Generic\Sniffs\PHP\CharacterBeforePHPOpeningTagSniff::class,

		/**
		 * Disallow tab indent
		 */
		\PHP_CodeSniffer\Standards\Generic\Sniffs\WhiteSpace\DisallowTabIndentSniff::class,

		/**
		 * Line length
		 */
		\PHP_CodeSniffer\Standards\Generic\Sniffs\Files\LineLengthSniff::class,

		/**
		 * Binary operator spaces.
		 */
		\PhpCsFixer\Fixer\Operator\BinaryOperatorSpacesFixer::class,

		/**
		 * No spaces inside parenthesis
		 */
		\PhpCsFixer\Fixer\Whitespace\NoSpacesInsideParenthesisFixer::class,

		/**
		 * No spaces after function name
		 */
		\PhpCsFixer\Fixer\FunctionNotation\FunctionDeclarationFixer::class,

		/**
		 * Class definition
		 */
		\PhpCsFixer\Fixer\ClassNotation\ClassDefinitionFixer::class,

		/**
		 * Method argument space
		 */
		\PhpCsFixer\Fixer\FunctionNotation\MethodArgumentSpaceFixer::class,

		/**
		 * Braces fixer
		 */
		\PhpCsFixer\Fixer\Basic\BracesFixer::class,

		/**
		 * Declare strict types.
		 */
		\SlevomatCodingStandard\Sniffs\TypeHints\DeclareStrictTypesSniff::class,

		/**
		 * DOC comment spacing
		 */
		\SlevomatCodingStandard\Sniffs\Commenting\DocCommentSpacingSniff::class,

		/**
		 * Camel caps method name
		 */
		\PHP_CodeSniffer\Standards\PSR1\Sniffs\Methods\CamelCapsMethodNameSniff::class,

		/**
		 * [Code] Disallow long array syntax
		 * [Reason]: It conflicts with PHPCS rule, perhaps we can also configure this in phpcs.xml but almost every PHP file contains the long array syntax.
		 */
		\PHP_CodeSniffer\Standards\Generic\Sniffs\Arrays\DisallowLongArraySyntaxSniff::class,

		/**
		 * [Code] Disallow short list syntax
		 * [Reason]: Most of project's PHP file contains the Yoda condition check.
		 */
		\SlevomatCodingStandard\Sniffs\ControlStructures\DisallowYodaComparisonSniff::class,

		/**
		 * [Code] Ternary to null coalescing
		 * [Reason]: Astra is compatible with PHP 5.4 so keeping it.
		 */
		\PhpCsFixer\Fixer\Operator\TernaryToNullCoalescingFixer::class,

		/**
		 * [Code] Unused parameter
		 * [Reason] Easier future modifications, reducing the need for refactoring when new functionality requires those parameters.
		 */
		\SlevomatCodingStandard\Sniffs\Functions\UnusedParameterSniff::class,

		/**
		 * [Code] Require only standalone increment and decrement operators
		 * [Reason] Provide a concise and efficient way to modify a value by 1, improving code readability and simplicity.
		 */
		\SlevomatCodingStandard\Sniffs\Operators\RequireOnlyStandaloneIncrementAndDecrementOperatorsSniff::class,

		/**
		 * [Code] Inline doc comment declaration
		 * [Reason] For documenting plugin inline filters and actions.
		 */
		\SlevomatCodingStandard\Sniffs\Commenting\InlineDocCommentDeclarationSniff::class,

		/**
		 * [Complexity] Having `classes` with more than 5 cyclomatic complexity is prohibited - Consider refactoring.
		 * [Reason] It's not feasible to maintain classes with lower cyclomatic complexity.
		 */
		\NunoMaduro\PhpInsights\Domain\Insights\CyclomaticComplexityIsHigh::class,

		/**
		 * [Architecture] Normal classes are forbidden. Classes must be final or abstract
		 * Todo: Remove this rule after fixing the issue
		 */
		\NunoMaduro\PhpInsights\Domain\Insights\ForbiddenNormalClasses::class,

		/**
		 * [Architecture] Forbidden traits
		 * [Reason] Used traits in plugin.
		 */
		\NunoMaduro\PhpInsights\Domain\Insights\ForbiddenTraits::class,

		/**
		 * [Architecture] Class declaration
		 * [Reason] As it's stable large codebase, ignoring it for now.
		 */
		\PHP_CodeSniffer\Standards\PSR1\Sniffs\Classes\ClassDeclarationSniff::class,

		/**
		 * [Style] Disallow alternative PHP tags
		 * [Reason] Template tags requires alternate PHP tags.
		 */
		\PHP_CodeSniffer\Standards\Generic\Sniffs\PHP\DisallowAlternativePHPTagsSniff::class,

		/**
		 * [Style] No trailing whitespace in comment
		 * [Reason] Conflicts with PHPCS rule.
		 */
		\PhpCsFixer\Fixer\Comment\NoTrailingWhitespaceInCommentFixer::class,

		/**
		 * [Type Hints] Enforces return type hints for methods and functions.
		 * [Reason] Ensures consistency and clarity in return types, improving code readability and reducing runtime errors.
		 */
		\SlevomatCodingStandard\Sniffs\TypeHints\ReturnTypeHintSniff:: class,

		/**
		 * [Type Hints] Enforces void return type hints for methods and functions.
		 * [Reason] Ensures consistency and clarity in return types, improving code readability and reducing runtime errors.
		 */
		\PhpCsFixer\Fixer\FunctionNotation\VoidReturnFixer::class,

		/**
		 * [Style] Ordered class elements
		 * [Reason] Allows flexible class element ordering based on context and readability.
		 */
		\PhpCsFixer\Fixer\ClassNotation\OrderedClassElementsFixer::class,
	],

	'config'       => [],

	/*
	|--------------------------------------------------------------------------
	| Requirements
	|--------------------------------------------------------------------------
	|
	| Here you may define a level you want to reach per `Insights` category.
	| When a score is lower than the minimum level defined, then an error
	| code will be returned. This is optional and individually defined.
	|
	*/

	'requirements' => [
		'min-quality'            => 96,
		'min-complexity'         => 0,
		'min-architecture'       => 84,
		'min-style'              => 98,
		'disable-security-check' => false,
	],

	/*
	|--------------------------------------------------------------------------
	| Threads
	|--------------------------------------------------------------------------
	|
	| Here you may adjust how many threads (core) PHPInsights can use to perform
	| the analysis. This is optional, don't provide it and the tool will guess
	| the max core number available. It accepts null value or integer > 0.
	|
	*/

	'threads'      => null,

	/*
	|--------------------------------------------------------------------------
	| Timeout
	|--------------------------------------------------------------------------
	| Here you may adjust the timeout (in seconds) for PHPInsights to run before
	| a ProcessTimedOutException is thrown.
	| This accepts an int > 0. Default is 60 seconds, which is the default value
	| of Symfony's setTimeout function.
	|
	*/

	'timeout'      => 180, // 3 minutes.
];
