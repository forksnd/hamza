﻿NDSummary.OnToolTipsLoaded("CClass:hz_sequence_t",{9:"<div class=\"NDToolTip TStruct LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">typedef</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">hz_sequence_t</div></div></div><div class=\"TTSummary\">A sequence of text, can be loaded with utf8 or unicode data.&nbsp; Holds direction, script, language, as well as other data relevant for the shaping process.</div></div>",20:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype20\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_API hz_sequence_t * hz_sequence_create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">void</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new sequence.</div></div>",34:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype34\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_API <span class=\"SHKeyword\">void</span> hz_sequence_destroy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">hz_sequence_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">sequence</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Destroys a sequence.</div></div>",35:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype35\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_API <span class=\"SHKeyword\">void</span> hz_sequence_load_utf8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">hz_sequence_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">sequence,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Loads sequence with UTF-8 encoded string.</div></div>",36:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype36\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_API <span class=\"SHKeyword\">void</span> hz_sequence_load_unicode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">hz_sequence_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">sequence,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">hz_unicode_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">str,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Loads sequence with a Unicode string.</div></div>"});