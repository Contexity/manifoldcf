<!--
 Licensed to the Apache Software Foundation (ASF) under one or more
 contributor license agreements.  See the NOTICE file distributed with
 this work for additional information regarding copyright ownership.
 The ASF licenses this file to You under the Apache License, Version 2.0
 (the "License"); you may not use this file except in compliance with
 the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<script type="text/javascript">
<!--

function s${SEQNUM}_AddExpression()
{
  if (editjob.s${SEQNUM}_expression_name.value == "")
  {
    alert("$Encoder.bodyJavascriptEscape($ResourceBundle.getString('ForcedMetadata.ExpressionMetadataNameMustNotBeNull'))");
    editjob.s${SEQNUM}_expression_name.focus();
    return;
  }
  document.editjob.s${SEQNUM}_expression_op.value="Add";
  postFormSetAnchor("s${SEQNUM}_expression_tag");
}
	
function s${SEQNUM}_DeleteExpression(n)
{
  eval("document.editjob.s${SEQNUM}_expression_"+n+"_op.value = 'Delete'");
  if (n == 0)
    postFormSetAnchor("s${SEQNUM}_expression_tag");
  else
    postFormSetAnchor("s${SEQNUM}_expression_"+(n-1)+"_tag");
}

function s${SEQNUM}_AddForcedMetadata()
{
  if (editjob.s${SEQNUM}_forcedmetadata_name.value == "")
  {
    alert("$Encoder.bodyJavascriptEscape($ResourceBundle.getString('ForcedMetadata.ForcedMetadataNameMustNotBeNull'))");
    editjob.s${SEQNUM}_forcedmetadata_name.focus();
    return;
  }
  document.editjob.s${SEQNUM}_forcedmetadata_op.value="Add";
  postFormSetAnchor("s${SEQNUM}_forcedmetadata_tag");
}
	
function s${SEQNUM}_DeleteForcedMetadata(n)
{
  eval("document.editjob.s${SEQNUM}_forcedmetadata_"+n+"_op.value = 'Delete'");
  if (n == 0)
    postFormSetAnchor("s${SEQNUM}_forcedmetadata_tag");
  else
    postFormSetAnchor("s${SEQNUM}_forcedmetadata_"+(n-1)+"_tag");
}

function s${SEQNUM}_addFieldMapping()
{
  if (editjob.s${SEQNUM}_fieldmapping_source.value == "")
  {
    alert("$Encoder.bodyEscape($ResourceBundle.getString('ForcedMetadata.NoFieldNameSpecified'))");
    editjob.s${SEQNUM}_fieldmapping_source.focus();
    return;
  }
  editjob.s${SEQNUM}_fieldmapping_op.value="Add";
  postFormSetAnchor("s${SEQNUM}_fieldmapping");
}

function s${SEQNUM}_deleteFieldMapping(i)
{
  // Set the operation
  eval("editjob.s${SEQNUM}_fieldmapping_op_"+i+".value=\"Delete\"");
  // Submit
  if (editjob.s${SEQNUM}_fieldmapping_count.value==i)
    postFormSetAnchor("s${SEQNUM}_fieldmapping");
  else
    postFormSetAnchor("s${SEQNUM}_fieldmapping_"+i)
  // Undo, so we won't get two deletes next time
  eval("editjob.s${SEQNUM}_fieldmapping_op_"+i+".value=\"Continue\"");
}

function s${SEQNUM}_checkSpecificationForSave()
{
  return true;
}

function s${SEQNUM}_checkSpecification()
{
  return true;
}

//-->
</script>
