import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform,ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
export default function Form(){
    return(
        
        <KeyboardAvoidingView style={styles.container} behavior={(Platform.OS==='ios')?'padding':'height'}>
            <ScrollView>
           <Text style={styles.center}>Simple Form With Formik</Text>
           <Formik
           initialValues={{
               email:'',
               password:''
           }}

           validationSchema={yup.object().shape({
               email:yup.string().required('email is required').email('enter a valid email'),
               password:yup.string().required('password is required')
           })}
           onSubmit={(values) => {
               console.log('values entered are : '+JSON.stringify(values));
           }}
           >
            {
                ({handleChange,handleBlur,handleSubmit,values,errors,touched})=>(<View style={styles.formContainer}>
                    <TextInput 
                    mode="outlined"
                    label="email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="enter your email"
                    style={styles.input}
                    error={errors.email && touched.email}
                    />
                    <Text>
                    {errors.email && touched.email && errors.email}
                    </Text>
                    <TextInput 
                    mode="outlined"
                    password="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="enter your password"
                    style={styles.input}
                    error={errors.password && touched.password}
                    />
                    <Text>
                    {errors.password && touched.password && errors.password}
                    </Text>

                    <TextInput 
                    mode="outlined"
                    password="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="enter your password"
                    style={styles.input}
                    error={errors.password && touched.password}
                    />
                    <Text>
                    {errors.password && touched.password && errors.password}
                    </Text>

                    <TextInput 
                    mode="outlined"
                    password="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="enter your password"
                    style={styles.input}
                    error={errors.password && touched.password}
                    />
                    <Text>
                    {errors.password && touched.password && errors.password}
                    </Text>

                    <TextInput 
                    mode="outlined"
                    password="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="enter your password"
                    style={styles.input}
                    error={errors.password && touched.password}
                    />
                    <Text>
                    {errors.password && touched.password && errors.password}
                    </Text>

                    <TextInput 
                    mode="outlined"
                    password="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="enter your password"
                    style={styles.input}
                    error={errors.password && touched.password}
                    />
                    <Text>
                    {errors.password && touched.password && errors.password}
                    </Text>

                    <TextInput 
                    mode="outlined"
                    password="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="enter your password"
                    style={styles.input}
                    error={errors.password && touched.password}
                    />
                    <Text>
                    {errors.password && touched.password && errors.password}
                    </Text>

                    <TextInput 
                    mode="outlined"
                    password="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="enter your password"
                    style={styles.input}
                    error={errors.password && touched.password}
                    />
                    <Text>
                    {errors.password && touched.password && errors.password}
                    </Text>

                    <TextInput 
                    mode="outlined"
                    password="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="enter your password"
                    style={styles.input}
                    error={errors.password && touched.password}
                    />
                    <Text>
                    {errors.password && touched.password && errors.password}
                    </Text>
                    <Button 
                    mode="contained"
                    onPress={handleSubmit}
                    >Submit</Button>
                    </View>
                )
            }
           </Formik>
           <View style={{padding:400,backgroundColor:'green'}}></View>
           </ScrollView>
       </KeyboardAvoidingView> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1  ,
        
    },
    formContainer:{
        flex:1,
        justifyContent:'center',
        borderWidth:2,
        borderColor:'red'
    },
    center:{
     textAlign:'center'
    },
    input:{
        width:"90%",
        alignSelf:'center',
        marginBottom:20
    }
});