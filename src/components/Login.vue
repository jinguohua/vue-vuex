<template>
    <div class="layout" :style="{backgroundImage: 'url(' + star + ')', backgroundSize:'contain'}">
        <Layout>
            <Header :style="{backgroundImage: 'url(' + star + ')', backgroundSize:'contain'}"></Header>
            <Header :style="{backgroundImage: 'url(' + star + ')', backgroundSize:'contain'}">
                <h2 style="color:#f1bc7d">趣闻轶事---励志言情</h2>
            </Header>
            <Content :style="{backgroundImage: 'url(' + star + ')', backgroundSize:'contain'}">
                <Tabs>
                    <TabPane label="登录" icon="logo-apple">
                        <Row>
                            <Col span="18" offset='3'>
                                <Input prefix="ios-contact" placeholder="Enter name" style="width: 100% ;background-color:rgba(0,0,0,.2);" >
                                </Input>
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="18" offset='3'>
                                <Input prefix="md-key" placeholder="Enter Password" style="width: 100%;background-color:rgba(0,0,0,.2);" />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane label="注册" icon="logo-windows">

                    </TabPane>
                    <TabPane label="随便看看" icon="logo-tux">
                        
                    </TabPane>
                </Tabs>
                <br>
            </Content>
            <Footer :style="{backgroundImage: 'url(' + star + ')', backgroundSize:'contain'}"> </Footer>
            <Footer :style="{backgroundImage: 'url(' + star + ')', backgroundSize:'contain'}">
                <Button type="default" ghost>登录</Button>
                <Button type="primary" ghost>忘记密码</Button>
            </Footer>
            <Footer :style="{backgroundImage: 'url(' + star + ')', backgroundSize:'contain'}"> </Footer>
        </Layout>
    </div>
</template>
<script>
import iview from 'iview'
import star from '@/assets/star.gif'
export default {
    name:'Login',
    data(){
        return{
            star:star
        }
    }
}
</script>
<style>
    .ivu-input{
        background-color: rgba(0,0,0,.2) !important;
        color: aliceblue !important;
        height: 80px;
    }
</style> 
